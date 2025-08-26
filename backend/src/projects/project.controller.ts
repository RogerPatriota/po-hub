import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProjectDTO } from "./dto/create.project.dto";


@Controller('project')
export class ProjectController {

    @Get()
    async check() {
        return { data: 'Its WORKING!! '}
    }

    @Post()
    async createProject(@Body() projectData: CreateProjectDTO) {
        
        return { data: projectData }
    }
}