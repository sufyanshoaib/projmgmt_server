package projmgmt_server

import com.odobo.grails.plugin.springsecurity.rest.RestAuthenticationFilter

class UrlFilters extends  RestAuthenticationFilter{

    def filters = {
        all(uri:"/**"){
            before = {
                 println("filter... ${params}, ${request}")
            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
