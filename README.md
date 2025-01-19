# Event Assesment App

Enjoy the project 😉

### For Run

After clone the project, you can run the project with the following commands.

```bash
npm install
npm run dev
```

### My Solution

In order to run the project, you must first create an .evn variable. Then, this file must be set as VITE_API_URL=http://localhost:3005. The reason for this is that .env files should not be committed to git for code security.

First of all, thank you for this assessment. First of all, I used the multi-language, code-splitting and lazy loading module structure in my project. Because every project can grow in the future and new modules can be added, I preferred this method. If you are confused about this issue, do not forget that the lazy loading structure can be undone. Each module carries its own store, API call, service and component structures. Thus, each module will carry its own business intelligence tools. I also created a context at the top where we can do all the operations related to the application in general. For example, I preferred to do global operations such as language change operations within this structure.

By creating a simple store with Zustand, I provided the CRUD methods required for the event structure with this structure. In order to use datetime inputs correctly when creating and updating events, I wrote extend methods for the date object. In this way, the necessary conversion operations can be used for each date object.
