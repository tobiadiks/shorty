import { DecodeUrlResponseDto, EncodeUrlResponseDto, StatsUrlResponseDto } from "../dto/url.dto";


export const toStatUrlResponseDto = (data: StatsUrlResponseDto): StatsUrlResponseDto => {
    const { id, link,
        decoded_link,
        short_link,
        encoded_link,
        clicks,
        created_at,
        last_visited,
    } = data;
    const statUrlResponseDto: StatsUrlResponseDto = {
        id, link,
        decoded_link,
        encoded_link,
        short_link,
        clicks,
        created_at,
        last_visited,
    };
    return statUrlResponseDto;
};


export const toDecodeUrlResponseDto = (data: DecodeUrlResponseDto): DecodeUrlResponseDto => {
    const {
        decoded_link,
    } = data;
    const decodeUrlResponseDto: DecodeUrlResponseDto = {
        decoded_link,
    };
    return decodeUrlResponseDto;
};

export const toEncodeUrlResponseDto = (data: EncodeUrlResponseDto): EncodeUrlResponseDto => {
    const {
        encoded_link,
    } = data;
    const encodeUrlResponseDto: EncodeUrlResponseDto = {
        encoded_link,
    };
    return encodeUrlResponseDto;
};
