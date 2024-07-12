import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update.user.dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
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
    updateUser(id: string, dto: UpdateUserDto): Promise<{
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
