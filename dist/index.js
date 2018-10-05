"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
const react_1 = __importDefault(require("react"));
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
module.exports = function includeCommonTests(absPathToExtension) {
    describe('common-ext-tests', () => {
        // this test ensures that overlayed can load the plugin
        test('loads safely', () => {
            return expect(Promise.resolve().then(() => __importStar(require(absPathToExtension)))).resolves.toBeDefined();
        });
        // this test ensures that overlayed can render the plugin
        test('renders safely', () => {
            return Promise.resolve().then(() => __importStar(require(absPathToExtension))).then((extensionMain) => {
                const extensionType = extensionMain.default;
                return expect(react_test_renderer_1.default.create(react_1.default.createElement(extensionType))).toBeDefined();
            });
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrREFBeUI7QUFDekIsOEVBQTBDO0FBRTFDLGlCQUFTLFNBQVMsa0JBQWtCLENBQUUsa0JBQTBCO0lBQzlELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7UUFDaEMsdURBQXVEO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sTUFBTSxtREFBUSxrQkFBa0IsSUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsRSxDQUFDLENBQUMsQ0FBQTtRQUVGLHlEQUF5RDtRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO1lBQzFCLE9BQU8sa0RBQU8sa0JBQWtCLElBQzdCLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxFQUFFO2dCQUN0QixNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFBO2dCQUMzQyxPQUFPLE1BQU0sQ0FBQyw2QkFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFLLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUNsRixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUEifQ==