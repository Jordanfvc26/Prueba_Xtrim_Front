//Interfaz de respuesta de la API
export interface ApiResponseInfoUser {
    mensaje: string;
    usuarios: [UserInfo]
}

//Interfaz con la información requerida para registrar usuario
export interface UserInfo {
    account_number: string;
    balance: string;
    city: string;
    parish: string;
    province: string;
    user_name: string;
}

//Interfaz con la información que devuelve la API al registrar un usuario
export interface ApiResponseRegisterUser {
    mensaje: string;
}

//Interfaz de respuesta de la API cuando se busca y se obtiene un usuario por número de cuenta
export interface ApiResponseSearchUser {
    mensaje: string;
    usuario: UserInfo;
}