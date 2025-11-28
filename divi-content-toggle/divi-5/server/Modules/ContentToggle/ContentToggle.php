<?php
/**
 * Static Module class.
 *
 * @package DCT\Modules\ContentToggle;
 */
namespace DCT\Modules\ContentToggle;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Direct access forbidden.' );
}

use ET\Builder\Framework\DependencyManagement\Interfaces\DependencyInterface;
use ET\Builder\Packages\ModuleLibrary\ModuleRegistration;
use ET\Builder\FrontEnd\Module\Script;
use DCT\Modules\ContentToggle\ContentToggleTraits;

/**
 * Class ContentToggle
 *
 * @package DCT\Modules\ContentToggle
 */
class ContentToggle implements DependencyInterface {

	use ContentToggleTraits\RenderCallbackTrait;
	use ContentToggleTraits\ModuleClassnamesTrait;
	use ContentToggleTraits\ModuleStylesTrait;
	use ContentToggleTraits\ModuleScriptDataTrait;

	public function load() {
		$module_json_folder_path = dirname( __DIR__, 3 ) . '/visual-builder/src/modules/content-toggle';
		add_action(
			'init',
			function() use ( $module_json_folder_path ) {
				ModuleRegistration::register_module(
					$module_json_folder_path,
					[ 'render_callback' => [ ContentToggle::class, 'render_callback' ] ]
				);
			}
		);
	}
}
