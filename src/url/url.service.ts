import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto, DecodeUrlDto, DecodedUrlResponseDto, StatsUrlResponseDto, EncodedUrlResponseDto } from './dto/url.dto';
import { Url } from './entity/url.entity';
import { toDecodeUrlResponseDto, toEncodeUrlResponseDto, toStatUrlResponseDto } from './mapper/url.mapper';
import { urlRegVerify } from '../helper/urlRegVerify'


@Injectable()
export class UrlService {
    constructor(@InjectRepository(Url) private readonly urlRepository: Repository<Url>) { }

    async Encode(data: CreateUrlDto): Promise<EncodedUrlResponseDto> {
        //validates that url is correct
        if (urlRegVerify(data.link)) {
            //creates and encode url
            const urlData = this.urlRepository.create(data);
            //check if it was successfully created
            if (urlData) {
                //saves if successfully created
                return toEncodeUrlResponseDto(await this.urlRepository.save(urlData))
            }
            else {
                throw new HttpException('could not save url object', HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
        else {
            throw new HttpException('this url is not valid', HttpStatus.BAD_REQUEST)
        }

    }

    async Decode(data: DecodeUrlDto): Promise<DecodedUrlResponseDto> {
        if (data) {
            let short_link = data.short_link.split('/').slice(-1).toString()
            const urlData = await this.urlRepository.findOne({ where: { short_link } })
            if (urlData) {
                return toDecodeUrlResponseDto(urlData)
            }
            else {
                throw new HttpException('does not exist', HttpStatus.NOT_FOUND)
            }
        }
        else {
            throw new HttpException('this url is not a valid input', HttpStatus.BAD_REQUEST)
        }
    }

    async Statistics(data: DecodeUrlDto): Promise<StatsUrlResponseDto> {
        if (data) {

            const urlData = await this.urlRepository.findOne(data)
            if (urlData) {
                return toStatUrlResponseDto(urlData)
            }
            else {
                throw new HttpException('does not exist', HttpStatus.NOT_FOUND)
            }
        }
        else {
            throw new HttpException('this short_url is not a valid input', HttpStatus.BAD_REQUEST)
        }
    }

    async Visit(data: DecodeUrlDto): Promise<string> {
        if (data) {

            const urlData = await this.urlRepository.findOne(data)
            if (urlData) {
                let currentClicks = urlData.clicks
                await this.urlRepository.update(urlData, { clicks: currentClicks + 1,last_visited:new Date().toLocaleString() })
                return urlData.link
            }
            else {
                throw new HttpException('does not exist', HttpStatus.NOT_FOUND)
            }
        }
        else {
            throw new HttpException('this url is not a valid input', HttpStatus.BAD_REQUEST)
        }
    }
}
