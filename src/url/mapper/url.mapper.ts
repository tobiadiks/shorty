import { DecodedUrlResponseDto, EncodedUrlResponseDto, StatsUrlResponseDto } from "../dto/url.dto";
import { Url } from "../entity/url.entity";


export const toStatUrlResponseDto = (data: Url): StatsUrlResponseDto => {
    const { id, link,
        short_link,
        clicks,
        created_at,
        last_visited,
    } = data;
    const statUrlResponseDto: StatsUrlResponseDto = {
        id, link,
        short_link,
        clicks,
        created_at,
        last_visited,
    };
    return statUrlResponseDto;
};


export const toDecodeUrlResponseDto = (data: Url): DecodedUrlResponseDto => {
    const {
        link
    } = data;

    const decodeUrlResponseDto: DecodedUrlResponseDto = {
        link,
    };
    return decodeUrlResponseDto;
};

export const toEncodeUrlResponseDto = (data: Url): EncodedUrlResponseDto => {
    const {
        short_link,
    } = data;
    const encodeUrlResponseDto: EncodedUrlResponseDto = {
        short_link,
    };
    return encodeUrlResponseDto;
};
