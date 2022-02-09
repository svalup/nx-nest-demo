import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStudentDto } from '@nx-nest-demo/dtos'
import { Student } from '@nx-nest-demo/entities'

@Injectable()
export class StudentsService {
  constructor (
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  async createStudent (createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto)
  }

  async getStudents () {
    return await this.studentRepository.find()
  }
}
