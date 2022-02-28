// defines the payload for the api

//payload definition for creating url object
export class CreateUrlDto {
    link: string;
}

//payload definition for creating url object
export class DecodeUrlDto {
    short_link: string;
}

//payload definition for decoded url object 
export class DecodeUrlResponseDto {
   link: string;
}

//payload definition for decoded url object 
export class EncodeUrlResponseDto {
    short_link: string;
}
//payload definition for returning url statistic
export class StatsUrlResponseDto {
    id: string;
    link: string
    decoded_link: string;
    encoded_link: string;
    short_link:string;
    clicks: number;
    created_at: string;
    last_visited: string;
}