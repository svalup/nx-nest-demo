import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStudentDto } from './dto/create-student.dto'
import { Student } from '../database/entities/student.entity'

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
