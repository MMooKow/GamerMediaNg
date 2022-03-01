export interface Comment {
    id: number;
    userId: number;
    postId: number;
    created : Date;
    body: string;
    likes: number;
    dislikes: number;
    isActive: boolean;
}