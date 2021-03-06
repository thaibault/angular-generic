// -*- coding: utf-8 -*-
/** @module aheadOfTimePrerenderableModule */
'use strict'
/* !
    region header
    [Project page](https://bitbucket.org/tsickert/bpvwebapp)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012
    endregion
*/
// region imports
import {APP_BASE_HREF} from '@angular/common'
import {NgModule} from '@angular/core'
import {ServerModule} from '@angular/platform-server'

import {ApplicationComponent} from './component/application'
import {Module} from './module'
// endregion
// region server pre-renderable module
/**
 * Dummy server compatible root application module to pre-render.
 */
@NgModule({
    bootstrap: [ApplicationComponent],
    imports: [Module, ServerModule],
    providers: [{
        provide: APP_BASE_HREF,
        useValue: '/'
    }]
})
export class PreRenderableModule {}
export default PreRenderableModule
export const PreRenderableModuleNgFactory = null
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
