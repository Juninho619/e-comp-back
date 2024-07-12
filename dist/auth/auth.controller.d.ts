import { AuthService } from './auth.service';
import { SignupDto } from './dto/auth.signup.dto';
import { SigninDto } from './dto/auth.signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto): Promise<{
        access_token: string;
    }>;
    signin(dto: SigninDto): Promise<{
        access_token: string;
    }>;
}
