describe('makeEditable', function(){
    var scope, element, compiled, html;
    
    beforeEach(module("meApp"));
	beforeEach(module('make-editable.html'));
    
    beforeEach(inject(function($rootScope, $compile){
        html = "\
        <div make-editable>\
            <p>Some text</p>\
        </div>\
        ";
        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
    }));
    
    it('should render element', function(){
        expect(element.find('p').length).toBe(1);
        expect(element.find('p').text()).toContain('text');
    });
    
    it('should be editable and then should not be', function(){
        expect(element.find('div').attr('contenteditable')).toEqual('false');
        element.find('button').click();
        expect(element.find('div').attr('contenteditable')).toEqual('true');
        element.find('button').click();
        expect(element.find('div').attr('contenteditable')).toEqual('false');
    });
    
    it('should change the button text to save', function(){
        expect(element.find('button').text()).toEqual('Edit');
        element.find('button').click();
        expect(element.find('button').text()).toEqual('Save');
    });
});