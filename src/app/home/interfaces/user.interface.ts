//Interfaz de respuesta de la API
export interface ApiResponseInfoUser {
    mensaje: string;
    usuarios: [UserInfo]
}

export interface UserInfo {
    account_number: string;
    balance: string;
    city: string;
    parish: string;
    province: string;
    user_name: string;
}