import { Body, Controller, Get, Param, Post, Redirect, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUrlDto, DecodeUrlDto, DecodedUrlResponseDto, StatsUrlResponseDto, EncodedUrlResponseDto } from './dto/url.dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
    constructor(private readonly urlService: UrlService) { }

    @Post('/encode')
    async Encode(@Body() data: CreateUrlDto): Promise<EncodedUrlResponseDto> {
        return await this.urlService.Encode(data)
    }

    @Get('/decode')
    async Decode(@Body() data: DecodeUrlDto): Promise<DecodedUrlResponseDto> {
        return await this.urlService.Decode(data)
    }

    @Get('/stats/:short_link')
    async Statistics(@Param() data: DecodeUrlDto): Promise<StatsUrlResponseDto> {
        return await this.urlService.Statistics(data)
    }

    @Get('/:short_link')
    async Visit(@Param() data: DecodeUrlDto, @Res() res: Response,@Req() req:Request) {
        const url = await this.urlService.Visit(data)
        res.redirect(url)
        
    }


}
