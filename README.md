
# Kanban Board

A simple, interactive Kanban board web application built with vanilla HTML, CSS, and JavaScript. This project allows users to manage tasks across three stages: To Do, In Progress, and Done, with drag-and-drop functionality and local storage persistence.

## Features

- **Three-column layout**: Organize tasks into To Do, In Progress, and Done columns
- **Add new tasks**: Click the "Add New Task" button to open a modal and create new tasks with title and description
- **Drag and drop**: Move tasks between columns by dragging and dropping
- **Persistent storage**: Tasks are automatically saved to localStorage and restored on page reload
- **Task counters**: Each column displays the number of tasks it contains
- **Dark theme**: Modern, dark UI with smooth transitions
- **Responsive design**: Works on different screen sizes

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling with CSS variables for theming and smooth animations
- **JavaScript (ES6+)**: Interactive functionality, drag-and-drop, and localStorage management

## How to Use

1. **Clone or download** the project files to your local machine
2. **Open** index.html in a modern web browser (Chrome, Firefox, Safari, Edge)
3. **Add tasks** by clicking the "Add New Task" button in the top navigation
4. **Fill in** the task title and description in the modal
5. **Click "Add Task"** to create the task (it will appear in the To Do column)
6. **Drag tasks** between columns by clicking and dragging them
7. **Tasks persist** automatically - they'll be saved when you refresh the page

## Project Structure

```
Kanban/
├── index.html      # Main HTML structure
├── style.css       # CSS styling and themes
└── script.js       # JavaScript functionality
```

## Known Issues

- The delete button on tasks is present but not yet functional
- No validation for empty task titles or descriptions
- No confirmation dialogs for actions

## Future Enhancements

- Implement task deletion functionality
- Add task editing capabilities
- Include due dates and priority levels
- Add search and filtering options
- Implement user authentication and cloud storage
- Add keyboard shortcuts for better accessibility

## Browser Support

This application works in all modern browsers that support:
- ES6+ JavaScript features
- HTML5 drag and drop API
- localStorage API

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes.

## License

This project is open source and available under the MIT License.
