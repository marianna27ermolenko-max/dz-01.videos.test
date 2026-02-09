import { FieldError } from "../../videos/types/fieldError"

export const APIErrorResult = 
(
    errors: FieldError[],
): { errorsMessages:  FieldError[] }  => {

  return { errorsMessages: errors };

};

