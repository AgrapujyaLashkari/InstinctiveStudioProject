import { Search } from 'lucide-react'
import message from '../assets/message.svg'
import help from '../assets/help.svg'
import notifi from '../assets/Notification.svg'


import setting from '../assets/settings.svg'

export function Header() {
  // const { selectedYear, selectedClass, setFilters } = useStore()

  return (
    <div className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search your course"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        
        {/* <Select
          value={selectedYear}
          onValueChange={(value) => setFilters(value, selectedClass)}
        >
          <SelectTrigger className="w-[180px]">
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
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="CBSE 9">CBSE 9</SelectItem>
            <SelectItem value="CBSE 10">CBSE 10</SelectItem>
          </SelectContent>
        </Select> */}
      </div>

      <div className="flex items-center gap-10">
        <img src={help} alt='help'/>
        <img src={message} alt='message'/>
        <img src={setting} alt='setting'/>
        <img src={notifi} alt='notification'/>
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-yellow-400 rounded-lg" />
          <span className="font-medium">Adeline H. Dancy</span>
        </div>
      </div>
    </div>
  )
}

