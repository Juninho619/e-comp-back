import { ImageService } from './image.service';
export declare class ImageController {
    private readonly imageService;
    constructor(imageService: ImageService);
    uploadFile(file: Express.Multer.File, route: string): void;
}
