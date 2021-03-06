import {expect} from "chai";
import {RequiredPropertyError} from "../../../src/converters/errors/RequiredPropertyError";

describe("RequiredPropertyError", () => {
  it("should have a message", () => {
    const errorInstance = new RequiredPropertyError(class Test {
    }, "propertyKey", "value");

    expect(errorInstance.message).to.equal("Property propertyKey on class Test is required. Given value: value");
    expect(errorInstance.name).to.equal("BAD_REQUEST");
  });
});
