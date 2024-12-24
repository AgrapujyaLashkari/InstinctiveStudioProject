import { Select,SelectContent,SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { useStore } from '../store/store'

export function StudentTable({ onAddStudent }: { onAddStudent: () => void }) {
  const { filteredStudents } = useStore()
  const { selectedYear, selectedClass, setFilters } = useStore()

  return (
    <div className="bg-white rounded-lg shadow p-4">


      <div className=' flex justify-between'>

        <div className=' flex  gap-[9px]'>
          <Select
              value={selectedYear}
              onValueChange={(value) => setFilters(value, selectedClass)}
            >
              <SelectTrigger className="w-[180px] bg-[#E9EDF1]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AY 2024-25">AY 2024-25</SelectItem>
                <SelectItem value="AY 2023-24">AY 2023-24</SelectItem>
              </SelectContent>
          </Select>
          <Select
            value={selectedClass}
            onValueChange={(value) => setFilters(selectedYear, value)}
          >
            <SelectTrigger className="w-[180px] bg-[#E9EDF1]">
              <SelectValue placeholder="Select Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CBSE 9">CBSE 9</SelectItem>
              <SelectItem value="CBSE 10">CBSE 10</SelectItem>
            </SelectContent>
          </Select>

        </div>

        <div>
          <Button 
          onClick={onAddStudent} 
          className="ml-4 bg-[#E9EDF1] hover:text-white text-[#3F526E]">
          +  Add new Student
          </Button>
        </div>



      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium text-gray-600">Student Name</th>
            <th className="text-left p-4 font-medium text-gray-600">Cohort</th>
            <th className="text-left p-4 font-medium text-gray-600">Courses</th>
            <th className="text-left p-4 font-medium text-gray-600">Date Joined</th>
            <th className="text-left p-4 font-medium text-gray-600">Last login</th>
            <th className="text-left p-4 font-medium text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id} className="border-b last:border-b-0">
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.cohort}</td>
              <td className="p-4">{student.courses.join(', ')}</td>
              <td className="p-4">{student.dateJoined}</td>
              <td className="p-4">{student.lastLogin}</td>
              <td className="p-4">
                <span className={`inline-block w-2 h-2 rounded-full ${
                  student.status === 'active' ? 'bg-green-500' : 'bg-red-500'
                }`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

