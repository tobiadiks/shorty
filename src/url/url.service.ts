import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUrlDto, DecodeUrlDto, DecodeUrlResponseDto, StatsUrlResponseDto } from './dto/url.dto';
import { Url } from './entity/url.entity';
import { toDecodeUrlResponseDto, toStatUrlResponseDto } from './mapper/url.mapper';



@Injectable()
export class UrlService {
    constructor(@InjectRepository(Url) private readonly urlRepository: Repository<Url>) { }

    async Encode(data: CreateUrlDto): Promise<StatsUrlResponseDto> {
        //validates that url is correct
        if (urlRegVerify(data.link)) {
            //creates and encode url
            const urlData = this.urlRepository.create(data);
            //check if it was successfully created
            if (urlData) {
                //saves if successfully created
                return await this.urlRepository.save(urlData)
            }
            else {
                throw new HttpException('could not save url object', HttpStatus.INTERNAL_SERVER_ERROR)
            }
        }
        else {
            throw new HttpException('this url is not valid', HttpStatus.BAD_REQUEST)
        }

    }

    async Decode(data: DecodeUrlDto): Promise<DecodeUrlResponseDto> {
        if (data) {
            const extracted_short = data.short_link.split('/')[data.short_link.length]
            const urlData = await this.urlRepository.findOne({ where: { short_link: extracted_short } })
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

    async Statistics(data:DecodeUrlDto):Promise<StatsUrlResponseDto>{
        if (data) {
            const extracted_short = data.short_link.split('/')[data.short_link.length]
            const urlData = await this.urlRepository.findOne({ where: { short_link: extracted_short } })
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
}
