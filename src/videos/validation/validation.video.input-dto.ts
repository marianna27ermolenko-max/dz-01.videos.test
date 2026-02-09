import { CreateVideoInputModel, UpdateVideoInputModel } from "../dto/video.input-dto";
import { Resolutions } from "../types/videos";
import { FieldError } from "../types/fieldError";



export const videoCreatedInputValidation = (data: CreateVideoInputModel): FieldError[] => {

const errors: FieldError[] = [];

if(!data.title || 
    typeof data.title !== "string" || 
    data.title.trim().length > 40){

        errors.push({ field: 'title', message: 'Invalid title'});
    };

if(!data.author || 
    typeof data.author !== "string" ||
    data.author.trim().length > 20){

   errors.push({ field: 'author', message: 'Invalid author'});
}; 

if(!Array.isArray(data.availableResolutions) 
){
   errors.push({ field: 'availableResolutions', message: 'AvailableResolutions must be array'})
} else if(data.availableResolutions.length === 0){
      errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions'})
} else if(data.availableResolutions.some((item) => typeof item !== 'string')){
     errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions of type'})
} else if (
  data.availableResolutions.some(
    item => !Object.values(Resolutions).includes(item)
  )
){
  errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions value'
  });

}

return errors;

};


export const videoUpdateInputValidation = (data: UpdateVideoInputModel): FieldError[] => {

const errors: FieldError[] = [];

if(!data.title || 
    typeof data.title !== "string" || 
    data.title.trim().length > 40){

        errors.push({ field: 'title', message: 'Invalid title'});
    };

if(!data.author || 
    typeof data.author !== "string" ||
    data.author.trim().length > 20){

   errors.push({ field: 'author', message: 'Invalid author'});
}; 

if(!Array.isArray(data.availableResolutions) ){
   errors.push({ field: 'availableResolutions', message: 'AvailableResolutions must be array'})
} else if(data.availableResolutions.length === 0){
      errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions'})
} else if(data.availableResolutions.some((item) => typeof item !== 'string')){
     errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions of type'})
} else if (
  data.availableResolutions.some(
    item => !Object.values(Resolutions).includes(item)
  )
){
  errors.push({ field: 'availableResolutions', message: 'Invalid availableResolutions value'
  });
}

if(!data.canBeDownloaded ||
    typeof data.canBeDownloaded !== 'boolean'
){ errors.push({ field: 'canBeDownloaded', message: 'Invalid canBeDownloaded'})};

if(!data.minAgeRestriction ||
   data.minAgeRestriction !== null &&
  typeof data.minAgeRestriction !== 'number'
){ errors.push({ field: 'minAgeRestriction', message: 'MinAgeRestriction can be number or null'})};


if(!data.publicationDate ||
  typeof data.publicationDate !== 'string'
){ errors.push({ field: 'publicationDate', message: 'Invalid publicationDate'})};


return errors;

};