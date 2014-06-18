class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}
        "/person" (controller: "person") {
            action = [GET: "index", POST: "save"]
        }
        "/api/projects/$projectId/tasks" (controller: 'task', action: 'projectTasks')
        "/api/projects/$projectId/tasks/${taskId}" (controller: 'task', action: 'show')
        "/api/projects" (resources: 'project')
        "/api/tasks" (resources: 'task')

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
