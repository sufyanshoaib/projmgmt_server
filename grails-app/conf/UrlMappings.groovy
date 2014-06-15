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
        "/api/project/$projectId/tasks" (controller: 'task', action: 'projectTasks')
        "/api/project" (resources: 'project')
        "/api/task" (resources: 'task')

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
