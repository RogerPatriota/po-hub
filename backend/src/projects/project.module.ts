import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectRepository } from "./project.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Project, ProjectSchema } from "./schemas/project.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }])],
    controllers: [ProjectController],
    providers: [ProjectRepository]
})
export class ProjectModule {}