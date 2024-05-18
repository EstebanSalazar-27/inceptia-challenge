export interface User {
 business_group: any[];
 email: string;
 first_name: string;
 groups: Group[];
 id: number;
 is_active: boolean;
 language: string;
 last_name: string;
 login_status: string;
 profile_image: null;
 token: string;
}

export interface Group {
 id: number;
 name: string;
}

