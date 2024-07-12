import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update.user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        username: string;
        email: string;
        id: string;
        created_at: Date;
        money: number;
        is_active: boolean;
        role: import(".prisma/client").$Enums.Role;
        Purchase: {
            id: string;
            product_id: string;
            amount: number;
            quantity: number;
        }[];
    }[]>;
    updateUser(dto: UpdateUserDto, id: string): Promise<{
        username: string;
        email: string;
        id: string;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        created_at: Date;
        money: number;
        is_active: boolean;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
