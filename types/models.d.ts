declare module models {
    interface IPaginateReddit {
        after?: string;
        before?: string;
    }

    interface IRedditQueryParams extends IPaginateReddit {
        count?: number;
        limit?: number;
    }

    interface IGetRedditPosts extends IRedditQueryParams {
        search?: string;
    }

    interface IRedditPost {
        kind: string;
        data: {
            subreddit: string;
            title: string;
            thumbnail: string;
            permalink: string;
            author: string;
            id: string;
        }
    }
    
    interface IRedditResponse {
        kind: string;
        data: {
            after: string;
            before: string;
            dist: number;
            children: IRedditPost[];
        }
    }
}