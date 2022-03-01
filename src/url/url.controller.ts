import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUrlDto, DecodeUrlDto, DecodeUrlResponseDto, StatsUrlResponseDto } from './dto/url.dto';
import { UrlService } from './url.service';

@Controller()
export class UrlController {
    constructor(private readonly urlService: UrlService) { }

    @Post('/encode')
    async Encode(@Body() data: CreateUrlDto): Promise<StatsUrlResponseDto> {
        return await this.urlService.Encode(data)
    }

    @Get('/decode')
    async Decode(@Body() data: DecodeUrlDto): Promise<DecodeUrlResponseDto> {
        return await this.urlService.Decode(data)
    }

    @Get('/stats/:short_link')
    async Statistics(@Param() data: DecodeUrlDto): Promise<StatsUrlResponseDto> {
        return this.Statistics(data)
    }

}
