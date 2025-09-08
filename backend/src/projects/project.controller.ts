import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProjectDTO } from "./dto/create.project.dto";
import { ProjectRepository } from "./project.repository";


@Controller('project')
export class ProjectController {

    constructor(
        private projectRepository: ProjectRepository
    ) {}

    @Get()
    async check() {
        return { data: 'Its WORKING!! '}
    }

    @Post()
    async createProject(@Body() projectData: CreateProjectDTO) {

        const newProject = this.projectRepository.createProject(projectData)

        if (newProject) {
            return { data: projectData }
        }
        
    }
}