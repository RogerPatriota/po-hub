import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Project } from "./schemas/project.schema";
import { Model } from "mongoose";
import { CreateProjectDTO } from "./dto/create.project.dto";


@Injectable()
export class ProjectRepository {

    constructor(
        @InjectModel(Project.name) private projectModel: Model<Project>
    ) {}

    async createProject(project: CreateProjectDTO) {
        const newProject = new this.projectModel(project)
        
        return newProject
    }
}
