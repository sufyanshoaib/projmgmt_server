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
     /*   "/api/project/$projectId/task" (controller: 'task', action: 'projectTasks')
        "/api/project/$projectId/task/${taskId}" (controller: 'task', action: 'show')
        "/api/project/$projectId" (controller: 'project', action: [GET: 'show'])
        "/api/project" (controller: 'project', action: [GET: 'index', POST: 'save'])
        "/api/task" (controller: 'task', action: [GET: 'show', POST: 'save'])
        "/api/task/create" (controller: 'task', action: 'create')
         //"/api/comment" (controller: 'comment', action: [GET: 'show', POST: 'save'])

        "/api/comment"(resource: 'comment')
        */

        "/api/projects" (resources: 'project'){
            "/tasks" (resources: 'task'){
                "/comments" (resources: 'comment')
            }
        }

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
