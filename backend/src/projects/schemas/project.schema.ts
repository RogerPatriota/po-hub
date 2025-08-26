import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose"


@Schema({ _id: false })
export class Requester {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    email: string
}

export const RequesterSchema = SchemaFactory.createForClass(Requester)

@Schema({ _id: false })
export class FormData {
    
    @Prop({ type: RequesterSchema, required: true})
    requester: Requester
    
    @Prop()
    stakeholders: string
    
    @Prop()
    description: string
    
    @Prop()
    problems: string
    
    @Prop()
    kpis: string
    
    @Prop()
    vision: string
    
    @Prop()
    dueDate: Date
    
    @Prop()
    additionalInformations: string

}

export const FormDataSchema = SchemaFactory.createForClass(FormData)

export type ProjectDocument = HydratedDocument<Project>

@Schema({ timestamps: true})
export class Project {

    @Prop({ required: true, unique: true})
    title: string

    @Prop()
    team: string

    @Prop({ default: 'to-do'})
    status: string

    @Prop({ default: 'forms'})
    source: string

    @Prop({ type: Date, default: null })
    analysisStartDate: Date | null;

    @Prop({ type: Date, default: null })
    analysisEndDate: Date | null;
  
    @Prop({ type: Date, default: null })
    developmentStartDate: Date | null;

    @Prop({ type: Date, default: null })
    developmentEndDate: Date | null;

    @Prop({ type: FormDataSchema, required: true })
    formData: FormData

}

export const ProjectSchema = SchemaFactory.createForClass(Project)