import { ListTodo, Table2 } from 'lucide-react';
import { useRoute } from './../routes'; 

const Navbar = () => {
    const { currentRoute, navigate } = useRoute();
  
    const navItems = [
      { 
        route: 'todo', 
        label: 'Todo List', 
        icon: <ListTodo size={20} />
      },
      { 
        route: 'pagination', 
        label: 'Pagination', 
        icon: <Table2 size={20} />
      }
    ];
  
    return (
      <nav className="bg-purple-500 text-white p-4">
        <div className="container mx-auto flex justify-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`flex items-center space-x-2 px-4 py-2 rounded ${
                currentRoute === item.route 
                  ? 'bg-purple-700' 
                  : 'hover:bg-purple-600'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    );
  };
  
  export default Navbar;