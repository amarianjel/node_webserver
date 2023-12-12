export class CreateTodoDto {

  private constructor(
    public readonly text: string,
    public readonly completedAt?: Date,
  ){}


  static create( props: {[key:string]: any} ): [string?, CreateTodoDto?]  {

    const { text, completedAt } = props;

    if ( !text ) return ['Text property is required', undefined];

    const parsedCompletedAt = completedAt ? new Date(completedAt) : new Date();

    if (completedAt && isNaN(parsedCompletedAt.getTime())) {
      return ["Invalid format for completedAt", undefined];
    }

    return [undefined, new CreateTodoDto(text, parsedCompletedAt)];
  }
}