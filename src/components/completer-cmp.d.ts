import { AfterViewChecked, ChangeDetectorRef, EventEmitter, AfterViewInit, ElementRef } from "@angular/core";
import { ControlValueAccessor, FormControl } from "@angular/forms";
import { CtrCompleter } from "../directives/ctr-completer";
import { CompleterData } from "../services/completer-data";
import { CompleterService } from "../services/completer-service";
import { CompleterItem } from "./completer-item";
export declare class CompleterCmp implements ControlValueAccessor, AfterViewChecked, AfterViewInit {
    private completerService;
    private cdr;
    dataService: CompleterData | undefined;
    inputName: string;
    inputId: string;
    pause: number;
    minSearchLength: number;
    maxChars: number;
    overrideSuggested: boolean;
    clearSelected: boolean;
    clearUnselected: boolean;
    fillHighlighted: boolean;
    placeholder: string;
    matchClass: string | undefined;
    fieldTabindex: number | undefined;
    autoMatch: boolean;
    disableInput: boolean;
    inputClass: string | undefined;
    autofocus: boolean;
    openOnFocus: boolean;
    openOnClick: boolean;
    selectOnClick: boolean;
    selectOnFocus: boolean;
    initialValue: any;
    autoHighlight: boolean;
    selected: EventEmitter<CompleterItem>;
    highlighted: EventEmitter<CompleterItem>;
    blurEvent: EventEmitter<void>;
    click: EventEmitter<void>;
    focusEvent: EventEmitter<void>;
    opened: EventEmitter<boolean>;
    keyup: EventEmitter<any>;
    keydown: EventEmitter<any>;
    completer: CtrCompleter | undefined;
    ctrInput: ElementRef | undefined;
    control: FormControl;
    displaySearching: boolean;
    displayNoResults: boolean;
    _textNoResults: string;
    _textSearching: string;
    private _onTouchedCallback;
    private _onChangeCallback;
    private _focus;
    private _open;
    private _searchStr;
    constructor(completerService: CompleterService, cdr: ChangeDetectorRef);
    get value(): any;
    set value(v: any);
    get searchStr(): string;
    set searchStr(value: string);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onTouched(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    set datasource(source: CompleterData | string | any[]);
    set textNoResults(text: string);
    set textSearching(text: string);
    onBlur(): void;
    onFocus(): void;
    onClick(event: any): void;
    onKeyup(event: any): void;
    onKeydown(event: any): void;
    onChange(value: string): void;
    open(): void;
    close(): void;
    focus(): void;
    blur(): void;
    isOpen(): boolean;
}
