import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronLeft, faChevronRight)

export default {
    install(app) {
        app.component('fa-icon', FontAwesomeIcon)
    },
}
