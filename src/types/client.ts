export interface Client {
    id: number;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: Date;
}

export interface CreateClientDto {
    name: string;
    email: string;
    phone?: string;
}
