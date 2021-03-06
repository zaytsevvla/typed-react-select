import {ReactNode, Component} from 'react';

type stringOrNode = string | ReactNode;

interface ISelectProps{
    addLabelText?: string;       // placeholder displayed when you want to add a label on a multi-value input
    allowCreate?: boolean;          // whether to allow creation of new entries
    'aria-label'?: string;		// Aria label (for assistive tech)
    'aria-labelledby'?: string;	// HTML ID of an element that should be used as the label (for assistive tech)
    autoBlur?: boolean;             // automatically blur the component when an option is selected
    autofocus?: boolean;            // autofocus the component on mount
    autosize?: boolean;             // whether to enable autosizing or not
    backspaceRemoves?: boolean;     // whether backspace removes an item if there is no text input
    backspaceToRemoveMessage?: string;  // Message to use for screenreaders to press backspace to remove the current item -
    // {label} is replaced with the item label
    className?: string;          // className for the outer element
    clearAllText?: stringOrNode,                 // title for the "clear" control when multi: true
    clearValueText?: stringOrNode,               // title for the "clear" control
    clearable?: boolean;            // should it be possible to reset value
    delimiter?: string;          // delimiter to use to join multiple values for the hidden field value
    disabled?: boolean;             // whether the Select is disabled or not
    escapeClearsValue?: boolean;    // whether escape clears the value when the menu is closed
    filterOption?: Function;         // method to filter a single option (option, filterString)
    filterOptions?: any;         // boolean to enable default filtering or function to filter the options array ([options], filterString, [values])
    ignoreAccents?: boolean;        // whether to strip diacritics when filtering
    ignoreCase?: boolean;           // whether to perform case-insensitive filtering
    inputProps?: Object;         // custom attributes for the Input
    inputRenderer?: Function;        // returns a custom input component
    isLoading?: boolean;            // whether the Select is loading externally or not (such as options being loaded)
    joinValues?: boolean;           // joins multiple values into a single form field with the delimiter (legacy mode)
    labelKey?: string;           // path of the label value in option objects
    matchPos?: string;           // (any|start) match the start or entire string when filtering
    matchProp?: string;          // (any|label|value) which option property to filter on
    menuBuffer?: number;         // optional buffer (in px) between the bottom of the viewport and the bottom of the menu
    menuContainerStyle?: Object; // optional style to apply to the menu container
    menuRenderer?: Function;         // renders a custom menu with options
    menuStyle?: Object;          // optional style to apply to the menu
    multi?: boolean;                // multi-value input
    name?: string;               // generates a hidden <input /> tag with this field name for html forms
    newOptionCreator?: Function;     // factory to create new options when allowCreate set
    noResultsText?: stringOrNode,                // placeholder displayed when there are no matching search results
    onBlur?: Function;               // onBlur handler: function (event) {}
    onBlurResetsInput?: boolean;    // whether input is cleared on blur
    onChange?: Function;             // onChange handler: function (newValue) {}
    onClose?: Function;              // fires when the menu is closed
    onFocus?: Function;              // onFocus handler: function (event) {}
    onInputChange?: Function;        // onInputChange handler: function (inputValue) {}
    onMenuScrollToBottom?: Function; // fires when the menu is scrolled to the bottom; can be used to paginate options
    onOpen?: Function;               // fires when the menu is opened
    onValueClick?: Function;         // onClick handler for value labels: function (value, event) {}
    openAfterFocus?: boolean;		// boolean to enable opening dropdown when focused
    openOnFocus?: boolean;          // always open options menu on focus
    optionClassName?: string;    // additional class(es) to apply to the <Option /> elements
    optionComponent?: Function;      // option component to render in dropdown
    optionRenderer?: Function;       // optionRenderer: function (option) {}
    options?: any[];             // array of options
    placeholder?: stringOrNode,                  // field placeholder, displayed when there's no value
    required?: boolean;             // applies HTML5 required attribute when needed
    resetValue?: any;            // value to use when you clear the control
    scrollMenuIntoView?: boolean;   // boolean to enable the viewport to shift so that the full menu fully visible when engaged
    searchable?: boolean;           // whether to enable searching feature or not
    simpleValue?: boolean;          // pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false
    style?: Object;              // optional style to apply to the control
    tabIndex?: string;           // optional tab index of the control
    tabSelectsValue?: boolean;      // whether to treat tabbing out while focused to be value selection
    value?: any;                 // initial field value
    valueComponent?: Function;       // value component to render
    valueKey?: string;           // path of the label value in option objects
    valueRenderer?: Function;        // valueRenderer: function (option) {}
    wrapperStyle?: Object;       // optional style to apply to the component wrapper
}

class Select extends Component<ISelectProps, any> {}

export = Select