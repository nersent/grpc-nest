import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiService {
  public async getStatus(message?: string): Promise<string> {
    return `Hello ${message}!`;
  }
}
