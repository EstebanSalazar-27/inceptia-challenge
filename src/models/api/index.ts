//  DTO LOGIN
export type Credentials = {
 email: string;
 password: string;
};
// TOKEN PAYLOAD
export interface TokenPayload {
 user_id: number;
 username: string;
 exp: number;
 email: string;
 orig_iat: number;
}
// USER
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

export interface Bot {
 alias: string;
 id: number;
 name: string;
 users: Partial<User>[];
}

// Logs

export interface RootLogsReq {
 count: number;
 next: string;
 previous: null;
 results: Log[];
}

export interface Log {
 bot: Bot;
 case_duration: string;
 case_log: CaseLog;
 case_result: CaseResult;
 case_uuid: string;
 code: null;
 extra_metadata: ExtraMetadata;
 first_name: string;
 id: number;
 is_active: boolean;
 is_complete: boolean;
 last_name: string;
 last_updated: string;
 phone: number;
 recording: string;
 status: Status;
}

export interface CaseLog {
 commitment: string;
 final_sip_code: number;
 got_promise: boolean;
 responses: Response[];
 result_id: number;
 transcription: Response[];
}

export interface Response {
 confidence: number;
 text: string;
 time: number;
}

export interface CaseResult {
 contacted: boolean;
 is_final: boolean;
 name: string;
 result_id: number;
}

export interface ExtraMetadata {
 BOcuit?: string;
 bot?: string;
 canal?: string;
 client_name?: string;
 correlation_id?: string;
 correlation_shared_id?: string;
 dni?: string;
 grupo?: string;
 orden?: string;
}

export enum Status {
 Closed = "CLOSED",
 Ongoing = "ONGOING",
}
