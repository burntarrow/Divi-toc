class Helper {

    static getResponsiveValues( $props, $field, $default_value = '', $force_return = false ) {
        let $field_values = {
            'desktop'   : $default_value,
            'tablet'    : $default_value,
            'phone'     : $default_value
        };

        $field_values['desktop'] = Helper.getAnyValue( $props, $field, 'desktop', $default_value, $force_return );
        if ( Helper.isResponsiveEnabled( $props, $field ) ) {
            $field_values['tablet'] = Helper.getAnyValue( $props, $field, 'tablet', $default_value, $force_return );
            $field_values['phone']  = Helper.getAnyValue( $props, $field, 'phone', $default_value, $force_return );
        }
        
        return $field_values;
    }

    static getHoverValue( $props, $field ) {
        let $hover_value = '';
        if ( Helper.isHoverEnabled( $props, $field ) && $props[$field+'__hover'] ) {
            $hover_value = $props[$field+'__hover'];
        }
        return $hover_value;
    }

    static getMarginPaddingCss( $props, $field, $property = 'margin', $use_important = false, $hover = false ) {
        if ( $hover ) {
            let $hover_value            = Helper.getHoverValue( $props, $field ),
                $processed_hover_value  = Helper.processMarginPaddingStyle( $hover_value, $property, $use_important );
            return $processed_hover_value;
        }
        let utils                   = window.ET_Builder.API.Utils._,
            $field_values           = Helper.getResponsiveValues( $props, $field ),
            $field_styles           = {};
        if ( ! utils.isEmpty( $field_values ) ) {
            $field_styles['desktop']    = Helper.processMarginPaddingStyle( $field_values['desktop'], $property, $use_important );
            $field_styles['tablet']     = Helper.processMarginPaddingStyle( $field_values['tablet'], $property, $use_important );
            $field_styles['phone']      = Helper.processMarginPaddingStyle( $field_values['phone'], $property, $use_important );
        }
        return $field_styles;
    }

    static processMarginPaddingStyle( $value, $property = 'margin', $use_important = false ) {
        let $style  = '',
            $values = $value.split('|'),
            utils   = window.ET_Builder.API.Utils._;

        if ( ! utils.isEmpty( $values ) ) {
            let $element_style = '';
            $values = $values.map( utils.trim );
            let $positions = [
                'top',
                'right',
                'bottom',
                'left',
            ];
            utils.forEach( $positions, function($position, $i) {
                if ( $values[ $i ] && '' !== $values[ $i ] ) {
                    let $important  = $use_important ? ' !important' : '';
                    $element_style += $property + '-' + $position + ':' + Helper.processMarginPaddingValue( $values[ $i ], $property ) + $important + ';';
                }
            });

            $style += utils.trimEnd( $element_style );
        }

        return $style;
    }

    static processMarginPaddingValue( $range, $option_type = '' ) {
        let utils               = window.ET_Builder.API.Utils._;
            $range              = utils.trim( $range );
        let $range_digit        = parseFloat( $range ),
            $range_string       = $range.replace( $range_digit, '' ),
            $result             = '',
            $acceptable_strings = {
                'margin'    : [ 'auto', 'inherit', 'initial', 'unset' ],
                'padding'   : [ 'inherit', 'initial', 'unset' ]
            };

        if ( '' !== $option_type && -1 !== $acceptable_strings[$option_type].indexOf( $range ) ) {
            $result = $range;
        } else {
            if ( '' === $range_string ) {
                $range_string = 'px';
            }
            $result = $range_digit + $range_string;
        }

        return $result;
    }

    static getGradient( args ) {
        const utils = window.ET_Builder.API.Utils._;

        let gradient = {
            gradientType:    'linear',
            direction:       '180deg',
            radialDirection: 'center',
            startColor:      '#2b87da',
            endColor:        '#29c4a9',
            startPosition:   '0%',
            endPosition:     '100%',
        };

        if ( window.ETBuilderBackend.builderVersion >= '4.16.0' ) {
            gradient['stops'] = '#2b87da 0%|#29c4a9 100%';
        }

        utils.forEach(args, function(value, key) {
            if ( '' !== value && ! utils.isUndefined( value ) ) {
                gradient[key] = value;
            }
        });

        if ( window.ETBuilderBackend.builderVersion >= '4.16.0' ) {
            let stops = gradient.stops;
            /*
            if ( '#2b87da 0%|#29c4a9 100%' === stops ) {
                let startColor      = '',
                    endColor        = '',
                    startPosition   = '',
                    endPosition     = '';

                if ( '' !== gradient.startColor ) {
                    startColor = gradient.startColor;
                }
                if ( '' !== gradient.endColor ) {
                    endColor = gradient.endColor;
                }
                if ( '' !== gradient.startPosition ) {
                    startPosition = gradient.startPosition;
                }
                if ( '' !== gradient.endPosition ) {
                    endPosition = gradient.endPosition;
                }

                stops = startColor + ' ' + startPosition + '|' + endColor + ' ' + endPosition;
            }
            */

            stops = stops.replace( /\|/g, ', ');

            let type        = 'linear',
                direction   = gradient.direction;

            switch ( gradient.gradientType ) {
                case 'conic':
                    type      = 'conic';
                    direction = 'from ' + gradient.direction ;
                    break;
                case 'elliptical':
                    type      = 'radial';
                    direction = 'ellipse at ' + gradient.radialDirection;
                    break;
                case 'radial':
                case 'circular':
                    type      = 'radial';
                    direction = 'circle at ' + gradient.radialDirection;
                    break;
                case 'linear':
                default:
                    type      = 'linear';
                    direction = gradient.direction;
            }

            return type + '-gradient( ' + direction + ', ' + stops + ' )';
        } else {
            let direction = gradient.gradientType === 'linear' || gradient.gradientType === '' ? gradient.direction : ( 'circle at ' + gradient.radialDirection );
            return gradient.gradientType + '-gradient( ' + direction + ', ' + gradient.startColor + ' ' + gradient.startPosition + ', ' + gradient.endColor + ' ' + gradient.endPosition + ' )';
        }
    }

    static get( props, name, device = 'desktop', defaultValue = '' ) {
        const utils = window.ET_Builder.API.Utils._;
        let suffix  = 'desktop' !== device ? '_' + device : '';
        let key     = name + suffix; 
        let value   = ! utils.isUndefined( props[ key ] ) && '' !== props[ key ] ? props[ key ] : defaultValue;
        return value;
    }

    static getDefaultValue( props, name, device = 'desktop', defaultValue = '' ) {
        if ( 'desktop' === device ) {
            return defaultValue;
        }

        // Get tablet value and return it for Tablet.
        let desktopValue = Helper.get( props, name, 'desktop', defaultValue );
        if ( 'tablet' === device ) {
            return desktopValue;
        }

        // Get phone value and return it for Phone.
        let tabletValue = Helper.get( props, name, 'tablet', desktopValue );
        if ( 'phone' === device ) {
            return tabletValue;
        }

        return defaultValue;
        
    }

    static getAnyValue( props, name, device = 'desktop', defaultValue = '', forceReturn = false ) {
        // Get current value.
        let currentValue = Helper.get( props, name, device, '' );

        // Get previous value to be compared.
        let prevValue = Helper.getDefaultValue( props, name, device, defaultValue );

        // Force to return any values given.
        if ( forceReturn ) {
            return '' !== currentValue ? currentValue : prevValue;
        }

        // Ensure current value is different with the previous device or default.
        if ( currentValue === prevValue ) {
            return '';
        }

        return currentValue;
    }

    
    static getInheritedValue( props, name, device, baseName, value = "" ) {
        const utils     = window.ET_Builder.API.Utils._;

        let newValue    = value;

        let enableFields = {
            [baseName + '_color']              : baseName + '_enable_color',
            [baseName + '_use_color_gradient'] : baseName + '_enable_use_color_gradient',
            [baseName + '_image']              : baseName + '_enable_image',
        };

        // Empty string is slug for desktop.
        let mapSlugs = {
            'desktop' : [ '' ],
            'hover'   : [ '__hover', '' ],
            'tablet'  : [ '_tablet', '' ],
            'phone'   : [ '_phone', '_tablet', '' ],
        };

        // Start checking if current field is enabled or disabled.
        let baseEnableFieldName =  ! utils.isUndefined( enableFields[name] ) ? enableFields[name] : '';

        // Bail early if setting name is different.
        if ( '' === baseEnableFieldName || utils.isUndefined( mapSlugs[device] ) ) {
            return newValue;
        }

        newValue = '';

        for ( const slug of mapSlugs[device].values() ) {
            if ( baseName + '_color' === name || baseName + '_image' === name ) {
                let baseType        = name.replace( baseName + '_', '' );
                let enableValue     = ! utils.isUndefined( props[ baseName + '_enable_' + baseType + slug ] )   ? props[ baseName + '_enable_' + baseType + slug ]  : ''; 
                let bgValue         = ! utils.isUndefined( props[ baseName + '_' + baseType + slug ] )          ? props[ baseName + '_' + baseType + slug ]         : ''; 
                let isBgEnabled     = 'off' !== enableValue;

                if ( '' !== bgValue && isBgEnabled ) {
                    newValue = bgValue;
                    break;
                } else if ( ! isBgEnabled ) {
                    newValue = '';
                    break;
                }

            // BG Gradient.
            } else if ( baseName + '_use_color_gradient' === name ) {
                newValue        = 'off';
                let fieldMap    = {
                    [baseName + '_use_color_gradient'] : {
                        'value' : baseName + '_use_color_gradient' + slug,
                        'start' : baseName + '_color_gradient_start' + slug,
                        'end'   : baseName + '_color_gradient_end' + slug,
                        'stops' : baseName + '_color_gradient_stops' + slug,
                    },
                };

                let fieldValue = ! utils.isUndefined( fieldMap[name]['value'] ) ? fieldMap[name]['value']   : '';
                let fieldStart = ! utils.isUndefined( fieldMap[name]['start'] ) ? fieldMap[name]['start']   : '';
                let fieldEnd   = ! utils.isUndefined( fieldMap[name]['end'] )   ? fieldMap[name]['end']     : '';
                let fieldStops = ! utils.isUndefined( fieldMap[name]['stops'] ) ? fieldMap[name]['stops']   : '';

                let useGradientValue   = ! utils.isUndefined( props[ fieldValue ] ) ? props[fieldValue]     : 'off';
                let gradientStartValue = ! utils.isUndefined( props[ fieldStart ] ) ? props[fieldStart]     : '#2b87da'; 
                let gradientEndValue   = ! utils.isUndefined( props[ fieldEnd ] )   ? props[fieldEnd]       : '#29c4a9';
                let gradientStopsValue = ! utils.isUndefined( props[ fieldStops ] ) ? props[fieldStops]     : '#2b87da 0%|#29c4a9 100%';
                let isGradientEnabled  = 'off' !== useGradientValue ? true : false;

                if ( ( '' !== gradientStopsValue || ( '' !==  gradientStartValue || '' !== gradientEndValue ) ) && isGradientEnabled ) {
                    newValue = 'on';
                    break;
                } else if ( ! isGradientEnabled ) {
                    newValue = 'off';
                    break;
                }
            }
        }
        return newValue;
    }

    static getHoverRawValue( props, field, defaultValue = '' ) {
        let utils = window.ET_Builder.API.Utils._;
        if ( ! utils.isUndefined( props[field+'__hover'] ) ) {
            return props[field+'__hover'];
        } else {
            return defaultValue;
        }
    }

    static isHoverEnabled( props, field ) {
        let utils = window.ET_Builder.API.Utils._;
        if ( utils.isEmpty( props[field+'__hover_enabled'] ) || ! utils.isString( props[field+'__hover_enabled'] ) ) {
            return false;
        }
        return props[field+'__hover_enabled'].startsWith('on') ? true : false;
    }

    static isResponsiveEnabled( props, field ) {
        let utils = window.ET_Builder.API.Utils._;
        if ( utils.isEmpty( props[field+'_last_edited'] ) || ! utils.isString( props[field+'_last_edited'] ) ) {
            return false;
        }
        return props[field+'_last_edited'].startsWith('on') ? true : false;
    }

    static generateBackgroundCss( additionalCss, props, options ) {
        const utils = window.ET_Builder.API.Utils._;

        let normalFields    = options['normal'];
        let hoverFields     = {};

        utils.forEach( normalFields, function( element, baseName ) {
            
            let cssElementProcessed = element;

            if ( utils.isArray( element ) ) {
                cssElementProcessed = element.join(',');
            }

            let base                        = baseName;
            let processedBackgroundImages   = '';
            let processedBackgroundColor    = '';
            let processedBackgroundBlend    = '';
            let backgroundImageStatus       = {
                    'desktop' : false,
                    'tablet'  : false,
                    'phone'   : false,
                };
            let devices = [ 'desktop', 'tablet', 'phone' ];
            for( const device of devices.values() ) {

                let backgroundStyle             = '';
                let backgroundColorStyle        = '';
                let backgroundImageStyle        = '';

                let hasGradient                 = false;
                let hasBackgroundImage          = false;
                let hasGradientAndImage         = false;
                let isGradientDisabled          = false;
                let isBackgroundImageDisabled   = false;

                let backgroundImages            = [];
                let OverlaysImage               = 'off';

                let isDesktop                   = 'desktop' === device;

                if ( ! isDesktop && ! Helper.isResponsiveEnabled( props, base + '_color' ) ) {
                    continue;
                }

                // Background Gradient
                let useColorGradient = Helper.getInheritedValue( props, base + '_use_color_gradient', device, base );
                if ( 'on' === useColorGradient ) {
                    OverlaysImage   = Helper.getAnyValue( props, base + '_color_gradient_overlays_image', device, '', true );
                    let gradientProperties  = {
                        'startColor'        : Helper.getAnyValue( props, base + '_color_gradient_start', device, '', true ),
                        'endColor'          : Helper.getAnyValue( props, base + '_color_gradient_end', device, '', true ),
                        'gradientType'      : Helper.getAnyValue( props, base + '_color_gradient_type', device, '', true ),
                        'linearDirection'   : Helper.getAnyValue( props, base + '_color_gradient_direction', device, '', true ),
                        'radialDirection'   : Helper.getAnyValue( props, base + '_color_gradient_direction_radial', device, '', true ),
                        'startPosition'     : Helper.getAnyValue( props, base + '_color_gradient_start_position', device, '', true ),
                        'endPosition'       : Helper.getAnyValue( props, base + '_color_gradient_end_position', device, '', true ),
                        'stops'             : Helper.getAnyValue( props, base + '_color_gradient_stops', device, '', true ),
                    }
                    let gradient    = Helper.getGradient( gradientProperties );
                    hasGradient     = true;
                    backgroundImages.push( gradient );
                } else if ( 'off' === useColorGradient ) {
                    isGradientDisabled = true;
                }

                // Background Image
                let backgroundImage = Helper.getInheritedValue( props, base + '_image', device, base ),
                    isBackgroundImageActive = '' !== backgroundImage;

                backgroundImageStatus[device] = isBackgroundImageActive;
                
                if ( isBackgroundImageActive ) {
                    
                    hasBackgroundImage = true;

                    let isPrevBackgroundImageActive = true;
                    if ( ! isDesktop ) {
                        isPrevBackgroundImageActive = 'tablet' === device ? backgroundImageStatus['desktop'] : backgroundImageStatus['tablet'];
                    }

                    // Size
                    let backgroundSize = Helper.getAnyValue( props, base + '_size', device, '', ! isPrevBackgroundImageActive );
                    if ( '' !== backgroundSize ) {
                        backgroundStyle += 'background-size: ' + backgroundSize + ';';
                    }
                    // Position
                    let backgroundPosition = Helper.getAnyValue( props, base + '_position', device, '', ! isPrevBackgroundImageActive );
                    if ( '' !== backgroundPosition ) {
                        backgroundStyle += 'background-position: ' + backgroundPosition.replace( '_', ' ' ) + ';';
                    }
                    // Repeat
                    let backgroundRepeat = Helper.getAnyValue( props, base + '_repeat', device, '', ! isPrevBackgroundImageActive );
                    if ( '' !== backgroundRepeat ) {
                        backgroundStyle += 'background-repeat: ' + backgroundRepeat + ';';
                    }
                    // Blend
                    let backgroundBlend         = Helper.getAnyValue( props, base + '_blend', device, '', ! isPrevBackgroundImageActive );
                    let backgroundBlendInherit  = Helper.getAnyValue( props, base + '_blend', device, '', true );
                    if ( '' !== backgroundBlendInherit ) {
                        if ( '' !== backgroundBlend ) {
                            backgroundStyle += 'background-blend-mode: ' + backgroundBlend + ';';
                        }
                        if ( hasGradient && hasBackgroundImage && 'normal' !== backgroundBlendInherit ) {
                            hasGradientAndImage  = true;
                            backgroundStyle     += 'background-color: initial;';
                            backgroundColorStyle = 'initial';
                        }
                        processedBackgroundBlend = backgroundBlend;
                    }

                    backgroundImages.push( 'url(' + backgroundImage + ')' );

                } else if ( '' === backgroundImage ) {
                    if ( '' !== processedBackgroundBlend ) {
                        backgroundStyle         += 'background-blend-mode: normal;';
                        processedBackgroundBlend = '';
                    }
                    isBackgroundImageDisabled = true;
                }

                if ( ! utils.isEmpty( backgroundImages ) ) {
                    if ( 'on' !== OverlaysImage )  {
                        backgroundImages = backgroundImages.reverse();
                    }

                    backgroundImageStyle = backgroundImages.join(', ');
                    if ( processedBackgroundImages !== backgroundImageStyle ) {
                        backgroundStyle += 'background-image: '+ backgroundImageStyle +' !important;';
                    }
                } else if ( ! isDesktop && isGradientDisabled && isBackgroundImageDisabled ) {
                    backgroundImageStyle = 'initial';
                    backgroundStyle     += 'background-image: initial !important;';
                }
                
                processedBackgroundImages = backgroundImageStyle;
                
                // Background Color
                if ( ! hasGradientAndImage ) {
                    let useBackgroundColor      = Helper.getInheritedValue( props, base + '_enable_color', device, base );
                    let backgroundColorInitial  = 'off' === useBackgroundColor && ! isDesktop ? 'initial' : '';
                    let backgroundColor         = backgroundColorInitial;

                    if ( '' !== Helper.getInheritedValue( props, base + '_color', device, base ) ) {
                        backgroundColor = Helper.getInheritedValue( props, base + '_color', device, base );
                    }

                    backgroundColorStyle = backgroundColor;

                    if ( '' !== backgroundColor && processedBackgroundColor !== backgroundColor ) {
                        backgroundStyle += 'background-color: ' + backgroundColor + ';';
                    }
                }

                // Save processed background color.
                processedBackgroundColor = backgroundColorStyle;
                
                if ( '' !== backgroundStyle ) {
                    additionalCss.push([{
                        selector:    `${cssElementProcessed}`,
                        declaration: `${backgroundStyle}`,
                        device:      `${device}`
                    }]);
                }
                
            }
        });
        
        if ( options['hover'] ) {
            hoverFields = options['hover'];
        } else {
            hoverFields = options['normal'];
            utils.forEach( hoverFields, function( element, baseName ) {
                if ( utils.isArray( element ) ) {
                    utils.forEach( element, function( elem, key ) {
                        element[key] = elem + ':hover';
                    });
                    hoverFields[baseName] = element;   
                } else {
                    hoverFields[baseName] = element + ':hover';   
                }
            });
        }

        utils.forEach( hoverFields, function( element, baseName ) {
            let cssElementProcessed = element;

            if ( utils.isArray( element ) ) {
                cssElementProcessed = element.join(',');
            }

            let base                        = baseName,
                device                      = 'hover',
                OverlaysImageDesktop        = Helper.getAnyValue( props, base + '_color_gradient_overlays_image', 'desktop', 'off', true ),
                gradientPropertiesDesktop   = {
                    'startColor'        : Helper.getAnyValue( props, base + '_color_gradient_start', 'desktop', '', true ),
                    'endColor'          : Helper.getAnyValue( props, base + '_color_gradient_end', 'desktop', '', true ),
                    'gradientType'      : Helper.getAnyValue( props, base + '_color_gradient_type', 'desktop', '', true ),
                    'linearDirection'   : Helper.getAnyValue( props, base + '_color_gradient_direction', 'desktop', '', true ),
                    'radialDirection'   : Helper.getAnyValue( props, base + '_color_gradient_direction_radial', 'desktop', '', true ),
                    'startPosition'     : Helper.getAnyValue( props, base + '_color_gradient_start_position', 'desktop', '', true ),
                    'endPosition'       : Helper.getAnyValue( props, base + '_color_gradient_end_position', 'desktop', '', true ),
                    'stops'             : Helper.getAnyValue( props, base + '_color_gradient_stops', 'desktop', '', true ),
                };

            if ( Helper.isHoverEnabled( props, base + '_color' ) ) {

                let backgroundImagesHover           = [],
                    backgroundHoverStyle            = '',
                    hasGradientHover                = false,
                    hasBackgroundImageHover         = false,
                    hasGradientAndImageHover        = false,
                    isGradientHoverDisabled         = false,
                    isBackgroundImageHoverDisabled  = false,
                    OverlaysImageHover              = 'off';
                
                // Background Gradient
                let useColorGradientHover           = Helper.getInheritedValue( props, base + '_use_color_gradient', device, base );
                if ( 'on' === useColorGradientHover ) {
                    let gradientTypeDesktop             = gradientPropertiesDesktop['gradientType'],
                        gradientDirectionDesktop        = gradientPropertiesDesktop['linearDirection'],
                        gradientRadialDirectionDesktop  = gradientPropertiesDesktop['radialDirection'],
                        gradientColorStartDesktop       = gradientPropertiesDesktop['startColor'],
                        gradientColorEndDesktop         = gradientPropertiesDesktop['endColor'],
                        gradientStartPositionDesktop    = gradientPropertiesDesktop['startPosition'],
                        gradientEndPositionDesktop      = gradientPropertiesDesktop['endPosition'],
                        gradientStopsDesktop            = gradientPropertiesDesktop['stops'];

                    let gradientTypeHover               = Helper.getHoverRawValue( props, base + '_color_gradient_type', gradientTypeDesktop ),
                        gradientDirectionHover          = Helper.getHoverRawValue( props, base + '_color_gradient_direction', gradientDirectionDesktop ),
                        gradientRadialDirectionHover    = Helper.getHoverRawValue( props, base + '_color_gradient_direction_radial', gradientRadialDirectionDesktop ),
                        gradientColorStartHover         = Helper.getHoverRawValue( props, base + '_color_gradient_start', gradientColorStartDesktop ),
                        gradientColorEndHover           = Helper.getHoverRawValue( props, base + '_color_gradient_end', gradientColorEndDesktop ),
                        gradientStartPositionHover      = Helper.getHoverRawValue( props, base + '_color_gradient_start_position', gradientStartPositionDesktop ),
                        gradientEndPositionHover        = Helper.getHoverRawValue( props, base + '_color_gradient_end_position', gradientEndPositionDesktop ),
                        gradientStopsHover              = Helper.getHoverRawValue( props, base + '_color_gradient_stops', gradientStopsDesktop );

                    let gradientPropertiesHover  = {
                        'startColor'        : '' !== gradientColorStartHover        ? gradientColorStartHover       : gradientColorStartDesktop,
                        'endColor'          : '' !== gradientColorEndHover          ? gradientColorEndHover         : gradientColorEndDesktop,
                        'gradientType'      : '' !== gradientTypeHover              ? gradientTypeHover             : gradientTypeDesktop,
                        'linearDirection'   : '' !== gradientDirectionHover         ? gradientDirectionHover        : gradientDirectionDesktop,
                        'radialDirection'   : '' !== gradientRadialDirectionHover   ? gradientRadialDirectionHover  : gradientRadialDirectionDesktop,
                        'startPosition'     : '' !== gradientStartPositionHover     ? gradientStartPositionHover    : gradientStartPositionDesktop,
                        'endPosition'       : '' !== gradientEndPositionHover       ? gradientEndPositionHover      : gradientEndPositionDesktop,
                        'stops'             : '' !== gradientStopsHover             ? gradientStopsHover            : gradientStopsDesktop,
                    }

                    OverlaysImageHover  = Helper.getHoverRawValue( props, base + '_color_gradient_overlays_image', OverlaysImageDesktop );
                    let gradientHover   = Helper.getGradient( gradientPropertiesHover );
                    hasGradientHover    = true;
                    backgroundImagesHover.push( gradientHover );
                } else if ( 'off' === useColorGradientHover ) {
                    isGradientHoverDisabled = true;
                }

                // Background Image
                let backgroundImageHover = Helper.getInheritedValue( props, base + '_image', device, base );
                if ( '' !== backgroundImageHover && null !== backgroundImageHover ) {
                    hasBackgroundImageHover = true;

                    // Size.
                    let backgroundSizeHover     = Helper.getHoverRawValue( props, base + '_size' ),
                        backgroundSizeDesktop   = ! utils.isUndefined( props[base + '_size'] ) ? props[base + '_size'] : '',
                        isSameBackgroundSize    = backgroundSizeHover === backgroundSizeDesktop;
                    if ( utils.isEmpty( backgroundSizeHover ) && ! utils.isEmpty( backgroundSizeDesktop ) ) {
                        backgroundSizeHover = backgroundSizeDesktop;
                    }
                    if ( ! utils.isEmpty( backgroundSizeHover ) && ! isSameBackgroundSize ) {
                        backgroundHoverStyle += 'background-size: ' + backgroundSizeHover + ';';
                    }

                    // Position.
                    let backgroundPositionHover     = Helper.getHoverRawValue( props, base + '_position' ),
                        backgroundPositionDesktop   = ! utils.isUndefined( props[base + '_position'] ) ? props[base + '_position'] : '',
                        isSameBackgroundPosition    = backgroundPositionHover === backgroundPositionDesktop;
                    if ( utils.isEmpty( backgroundPositionHover ) && ! utils.isEmpty( backgroundPositionDesktop ) ) {
                        backgroundPositionHover = backgroundPositionDesktop;
                    }
                    if ( ! utils.isEmpty( backgroundPositionHover ) && ! isSameBackgroundPosition ) {
                        backgroundHoverStyle += 'background-position: ' + backgroundPositionHover.replace( '_', ' ' ) + ';';
                    }

                    // Repeat.
                    let backgroundRepeatHover   = Helper.getHoverRawValue( props, base + '_repeat' ),
                        backgroundRepeatDesktop = ! utils.isUndefined( props[base + '_repeat'] ) ? props[base + '_repeat'] : '',
                        isSameBackgroundRepeat  = backgroundRepeatHover === backgroundRepeatDesktop;
                    if ( utils.isEmpty( backgroundRepeatHover ) && ! utils.isEmpty( backgroundRepeatDesktop ) ) {
                        backgroundRepeatHover = backgroundRepeatDesktop;
                    }
                    if ( ! utils.isEmpty( backgroundRepeatHover ) && ! isSameBackgroundRepeat ) {
                        backgroundHoverStyle += 'background-repeat: ' + backgroundRepeatHover + ';';
                    }

                    // Blend.
                    let backgroundBlendHover    = Helper.getHoverRawValue( props, base + '_blend' ),
                        backgroundBlendDesktop  = ! utils.isUndefined( props[base + '_blend'] ) ? props[base + '_blend'] : '',
                        isSameBackgroundBlend   = backgroundBlendHover === backgroundBlendDesktop;
                    if ( utils.isEmpty( backgroundBlendHover ) && ! utils.isEmpty( backgroundBlendDesktop ) ) {
                        backgroundBlendHover = backgroundBlendDesktop;
                    }

                    if ( ! utils.isEmpty( backgroundBlendHover ) ) {
                        if ( ! isSameBackgroundBlend ) {
                            backgroundHoverStyle += 'background-blend-mode: ' + backgroundBlendHover + ';';
                        }

                        // Force background-color: initial;
                        if ( hasGradientHover && hasBackgroundImageHover && 'normal' !== backgroundBlendHover ) {
                            hasGradientAndImageHover = true;
                            backgroundHoverStyle    += 'background-color: initial !important;';
                        }
                    }

                    // Only append background image when the image exists.
                    backgroundImagesHover.push( 'url('+ backgroundImageHover +')' );
                } else if ( '' === backgroundImageHover ) {
                    isBackgroundImageHoverDisabled = true;
                }

                if ( ! utils.isEmpty( backgroundImagesHover ) ) {
                    // The browsers stack the images in the opposite order to what you'd expect.
                    if ( 'on' !== OverlaysImageHover ) {
                        backgroundImagesHover = backgroundImagesHover.reverse();
                    }

                    backgroundHoverStyle += 'background-image: ' + backgroundImagesHover.join(', ') + ' !important;';
                } else if ( isGradientHoverDisabled && isBackgroundImageHoverDisabled ) {
                    backgroundHoverStyle += 'background-image: initial !important;';
                }

                // Background Color Hover.
                if ( ! hasGradientAndImageHover ) {
                    let backgroundColorHover    = Helper.getInheritedValue( props, base + '_color', device, base );
                    backgroundColorHover        = '' !== backgroundColorHover ? backgroundColorHover : 'transparent';

                    if ( '' !== backgroundColorHover ) {
                        backgroundHoverStyle += 'background-color: ' + backgroundColorHover + ' !important; ';
                    }
                }

                // Print background hover gradient and image styles.
                if ( '' !== backgroundHoverStyle ) {
                    additionalCss.push([{
                        selector:    `${cssElementProcessed}`,
                        declaration: `${backgroundHoverStyle}`,
                        device:      `${device}`
                    }]);
                }
            }
        });
    }
    
}
export default Helper;