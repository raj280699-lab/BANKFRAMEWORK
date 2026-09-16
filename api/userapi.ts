export class userapi {

    constructor(private request: any) {}

    async getUsers() 
    {
        return await this.request.get('https://reqres.in/api/users?page=2');
    }

    async createUser(name: string, job: string) {
        return await this.request.post(
            'https://reqres.in/api/users',
            {
                data: {
                    name,
                    job
                }
            }
        );
    }
}