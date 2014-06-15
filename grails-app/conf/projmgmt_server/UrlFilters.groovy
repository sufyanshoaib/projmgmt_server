package projmgmt_server

class UrlFilters {

    def filters = {
        all(uri:"/**"){
            before = {
                 println("filter... ${params}")
            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
