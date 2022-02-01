import { Body, Controller, Get, Post } from '@nestjs/common'
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger'
import { CreateStudentDto } from './dto/create-student.dto'
import { Student } from './student.entity'
import { StudentsService } from './students.service'

@Controller('students')
export class StudentsController {
  constructor (private studentService: StudentsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Create a new student', type: Student, isArray: false
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async createStudent (@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.createStudent(createStudentDto)
  }

  @Get()
  @ApiOkResponse({ description: 'Retrieve all student from the database', type: Student, isArray: true })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getStudents () {
    return await this.studentService.getStudents()
  }
}
