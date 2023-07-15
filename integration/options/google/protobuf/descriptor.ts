/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FileDescriptorProto as FileDescriptorProto1 } from "ts-proto-descriptors";
import Long = require("long");

export const protobufPackage = "google.protobuf";

/**
 * The protocol compiler can output a FileDescriptorSet containing the .proto
 * files it parses.
 */
export interface FileDescriptorSet {
  file: FileDescriptorProto[];
}

/** Describes a complete .proto file. */
export interface FileDescriptorProto {
  /** file name, relative to root of source tree */
  name: string;
  /** e.g. "foo", "foo.bar", etc. */
  package: string;
  /** Names of files imported by this file. */
  dependency: string[];
  /** Indexes of the public imported files in the dependency list above. */
  publicDependency: number[];
  /**
   * Indexes of the weak imported files in the dependency list.
   * For Google-internal migration only. Do not use.
   */
  weakDependency: number[];
  /** All top-level definitions in this file. */
  messageType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  service: ServiceDescriptorProto[];
  extension: FieldDescriptorProto[];
  options:
    | FileOptions
    | undefined;
  /**
   * This field contains optional information about the original source code.
   * You may safely remove this entire field without harming runtime
   * functionality of the descriptors -- the information is needed only by
   * development tools.
   */
  sourceCodeInfo:
    | SourceCodeInfo
    | undefined;
  /**
   * The syntax of the proto file.
   * The supported values are "proto2" and "proto3".
   */
  syntax: string;
}

/** Describes a message type. */
export interface DescriptorProto {
  name: string;
  field: FieldDescriptorProto[];
  extension: FieldDescriptorProto[];
  nestedType: DescriptorProto[];
  enumType: EnumDescriptorProto[];
  extensionRange: DescriptorProto_ExtensionRange[];
  oneofDecl: OneofDescriptorProto[];
  options: MessageOptions | undefined;
  reservedRange: DescriptorProto_ReservedRange[];
  /**
   * Reserved field names, which may not be used by fields in the same message.
   * A given name may only be reserved once.
   */
  reservedName: string[];
}

export interface DescriptorProto_ExtensionRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
  options: ExtensionRangeOptions | undefined;
}

/**
 * Range of reserved tag numbers. Reserved tag numbers may not be used by
 * fields or extension ranges in the same message. Reserved ranges may
 * not overlap.
 */
export interface DescriptorProto_ReservedRange {
  /** Inclusive. */
  start: number;
  /** Exclusive. */
  end: number;
}

export interface ExtensionRangeOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

/** Describes a field within a message. */
export interface FieldDescriptorProto {
  name: string;
  number: number;
  label: FieldDescriptorProto_Label;
  /**
   * If type_name is set, this need not be set.  If both this and type_name
   * are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.
   */
  type: FieldDescriptorProto_Type;
  /**
   * For message and enum types, this is the name of the type.  If the name
   * starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping
   * rules are used to find the type (i.e. first the nested types within this
   * message are searched, then within the parent, on up to the root
   * namespace).
   */
  typeName: string;
  /**
   * For extensions, this is the name of the type being extended.  It is
   * resolved in the same manner as type_name.
   */
  extendee: string;
  /**
   * For numeric types, contains the original text representation of the value.
   * For booleans, "true" or "false".
   * For strings, contains the default text contents (not escaped in any way).
   * For bytes, contains the C escaped value.  All bytes >= 128 are escaped.
   * TODO(kenton):  Base-64 encode?
   */
  defaultValue: string;
  /**
   * If set, gives the index of a oneof in the containing type's oneof_decl
   * list.  This field is a member of that oneof.
   */
  oneofIndex: number;
  /**
   * JSON name of this field. The value is set by protocol compiler. If the
   * user has set a "json_name" option on this field, that option's value
   * will be used. Otherwise, it's deduced from the field's name by converting
   * it to camelCase.
   */
  jsonName: string;
  options:
    | FieldOptions
    | undefined;
  /**
   * If true, this is a proto3 "optional". When a proto3 field is optional, it
   * tracks presence regardless of field type.
   *
   * When proto3_optional is true, this field must be belong to a oneof to
   * signal to old proto3 clients that presence is tracked for this field. This
   * oneof is known as a "synthetic" oneof, and this field must be its sole
   * member (each proto3 optional field gets its own synthetic oneof). Synthetic
   * oneofs exist in the descriptor only, and do not generate any API. Synthetic
   * oneofs must be ordered after all "real" oneofs.
   *
   * For message fields, proto3_optional doesn't create any semantic change,
   * since non-repeated message fields always track presence. However it still
   * indicates the semantic detail of whether the user wrote "optional" or not.
   * This can be useful for round-tripping the .proto file. For consistency we
   * give message fields a synthetic oneof also, even though it is not required
   * to track presence. This is especially important because the parser can't
   * tell if a field is a message or an enum, so it must always create a
   * synthetic oneof.
   *
   * Proto2 optional fields do not set this flag, because they already indicate
   * optional with `LABEL_OPTIONAL`.
   */
  proto3Optional: boolean;
}

export enum FieldDescriptorProto_Type {
  /**
   * TYPE_DOUBLE - 0 is reserved for errors.
   * Order is weird for historical reasons.
   */
  TYPE_DOUBLE = 1,
  TYPE_FLOAT = 2,
  /**
   * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
   * negative values are likely.
   */
  TYPE_INT64 = 3,
  TYPE_UINT64 = 4,
  /**
   * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
   * negative values are likely.
   */
  TYPE_INT32 = 5,
  TYPE_FIXED64 = 6,
  TYPE_FIXED32 = 7,
  TYPE_BOOL = 8,
  TYPE_STRING = 9,
  /**
   * TYPE_GROUP - Tag-delimited aggregate.
   * Group type is deprecated and not supported in proto3. However, Proto3
   * implementations should still be able to parse the group wire format and
   * treat group fields as unknown fields.
   */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Length-delimited aggregate. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - New in version 2. */
  TYPE_BYTES = 12,
  TYPE_UINT32 = 13,
  TYPE_ENUM = 14,
  TYPE_SFIXED32 = 15,
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Uses ZigZag encoding. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Uses ZigZag encoding. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}

export enum FieldDescriptorProto_Label {
  /** LABEL_OPTIONAL - 0 is reserved for errors */
  LABEL_OPTIONAL = 1,
  LABEL_REQUIRED = 2,
  LABEL_REPEATED = 3,
  UNRECOGNIZED = -1,
}

/** Describes a oneof. */
export interface OneofDescriptorProto {
  name: string;
  options: OneofOptions | undefined;
}

/** Describes an enum type. */
export interface EnumDescriptorProto {
  name: string;
  value: EnumValueDescriptorProto[];
  options:
    | EnumOptions
    | undefined;
  /**
   * Range of reserved numeric values. Reserved numeric values may not be used
   * by enum values in the same enum declaration. Reserved ranges may not
   * overlap.
   */
  reservedRange: EnumDescriptorProto_EnumReservedRange[];
  /**
   * Reserved enum value names, which may not be reused. A given name may only
   * be reserved once.
   */
  reservedName: string[];
}

/**
 * Range of reserved numeric values. Reserved values may not be used by
 * entries in the same enum. Reserved ranges may not overlap.
 *
 * Note that this is distinct from DescriptorProto.ReservedRange in that it
 * is inclusive such that it can appropriately represent the entire int32
 * domain.
 */
export interface EnumDescriptorProto_EnumReservedRange {
  /** Inclusive. */
  start: number;
  /** Inclusive. */
  end: number;
}

/** Describes a value within an enum. */
export interface EnumValueDescriptorProto {
  name: string;
  number: number;
  options: EnumValueOptions | undefined;
}

/** Describes a service. */
export interface ServiceDescriptorProto {
  name: string;
  method: MethodDescriptorProto[];
  options: ServiceOptions | undefined;
}

/** Describes a method of a service. */
export interface MethodDescriptorProto {
  name: string;
  /**
   * Input and output type names.  These are resolved in the same way as
   * FieldDescriptorProto.type_name, but must refer to a message type.
   */
  inputType: string;
  outputType: string;
  options:
    | MethodOptions
    | undefined;
  /** Identifies if client streams multiple client messages */
  clientStreaming: boolean;
  /** Identifies if server streams multiple server messages */
  serverStreaming: boolean;
}

export interface FileOptions {
  /**
   * Sets the Java package where classes generated from this .proto will be
   * placed.  By default, the proto package is used, but this is often
   * inappropriate because proto packages do not normally start with backwards
   * domain names.
   */
  javaPackage: string;
  /**
   * Controls the name of the wrapper Java class generated for the .proto file.
   * That class will always contain the .proto file's getDescriptor() method as
   * well as any top-level extensions defined in the .proto file.
   * If java_multiple_files is disabled, then all the other classes from the
   * .proto file will be nested inside the single wrapper outer class.
   */
  javaOuterClassname: string;
  /**
   * If enabled, then the Java code generator will generate a separate .java
   * file for each top-level message, enum, and service defined in the .proto
   * file.  Thus, these types will *not* be nested inside the wrapper class
   * named by java_outer_classname.  However, the wrapper class will still be
   * generated to contain the file's getDescriptor() method as well as any
   * top-level extensions defined in the file.
   */
  javaMultipleFiles: boolean;
  /**
   * This option does nothing.
   *
   * @deprecated
   */
  javaGenerateEqualsAndHash: boolean;
  /**
   * If set true, then the Java2 code generator will generate code that
   * throws an exception whenever an attempt is made to assign a non-UTF-8
   * byte sequence to a string field.
   * Message reflection will do the same.
   * However, an extension field still accepts non-UTF-8 byte sequences.
   * This option has no effect on when used with the lite runtime.
   */
  javaStringCheckUtf8: boolean;
  optimizeFor: FileOptions_OptimizeMode;
  /**
   * Sets the Go package where structs generated from this .proto will be
   * placed. If omitted, the Go package will be derived from the following:
   *   - The basename of the package import path, if provided.
   *   - Otherwise, the package statement in the .proto file, if present.
   *   - Otherwise, the basename of the .proto file, without extension.
   */
  goPackage: string;
  /**
   * Should generic services be generated in each language?  "Generic" services
   * are not specific to any particular RPC system.  They are generated by the
   * main code generators in each language (without additional plugins).
   * Generic services were the only kind of service generation supported by
   * early versions of google.protobuf.
   *
   * Generic services are now considered deprecated in favor of using plugins
   * that generate code specific to your particular RPC system.  Therefore,
   * these default to false.  Old code which depends on generic services should
   * explicitly set them to true.
   */
  ccGenericServices: boolean;
  javaGenericServices: boolean;
  pyGenericServices: boolean;
  phpGenericServices: boolean;
  /**
   * Is this file deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for everything in the file, or it will be completely ignored; in the very
   * least, this is a formalization for deprecating files.
   */
  deprecated: boolean;
  /**
   * Enables the use of arenas for the proto messages in this file. This applies
   * only to generated classes for C++.
   */
  ccEnableArenas: boolean;
  /**
   * Sets the objective c class prefix which is prepended to all objective c
   * generated classes from this .proto. There is no default.
   */
  objcClassPrefix: string;
  /** Namespace for generated classes; defaults to the package. */
  csharpNamespace: string;
  /**
   * By default Swift generators will take the proto package and CamelCase it
   * replacing '.' with underscore and use that to prefix the types/symbols
   * defined. When this options is provided, they will use this value instead
   * to prefix the types/symbols defined.
   */
  swiftPrefix: string;
  /**
   * Sets the php class prefix which is prepended to all php generated classes
   * from this .proto. Default is empty.
   */
  phpClassPrefix: string;
  /**
   * Use this option to change the namespace of php generated classes. Default
   * is empty. When this option is empty, the package name will be used for
   * determining the namespace.
   */
  phpNamespace: string;
  /**
   * Use this option to change the namespace of php generated metadata classes.
   * Default is empty. When this option is empty, the proto file name will be
   * used for determining the namespace.
   */
  phpMetadataNamespace: string;
  /**
   * Use this option to change the package of ruby generated classes. Default
   * is empty. When this option is not set, the package name will be used for
   * determining the ruby package.
   */
  rubyPackage: string;
  /**
   * The parser stores options it doesn't recognize here.
   * See the documentation for the "Options" section above.
   */
  uninterpretedOption: UninterpretedOption[];
}

/** Generated classes can be optimized for speed or code size. */
export enum FileOptions_OptimizeMode {
  /** SPEED - Generate complete code for parsing, serialization, */
  SPEED = 1,
  /** CODE_SIZE - etc. */
  CODE_SIZE = 2,
  /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
  LITE_RUNTIME = 3,
  UNRECOGNIZED = -1,
}

export interface MessageOptions {
  /**
   * Set true to use the old proto1 MessageSet wire format for extensions.
   * This is provided for backwards-compatibility with the MessageSet wire
   * format.  You should not use this for any other reason:  It's less
   * efficient, has fewer features, and is more complicated.
   *
   * The message must be defined exactly as follows:
   *   message Foo {
   *     option message_set_wire_format = true;
   *     extensions 4 to max;
   *   }
   * Note that the message cannot have any defined fields; MessageSets only
   * have extensions.
   *
   * All extensions of your type must be singular messages; e.g. they cannot
   * be int32s, enums, or repeated messages.
   *
   * Because this is an option, the above two restrictions are not enforced by
   * the protocol compiler.
   */
  messageSetWireFormat: boolean;
  /**
   * Disables the generation of the standard "descriptor()" accessor, which can
   * conflict with a field of the same name.  This is meant to make migration
   * from proto1 easier; new code should avoid fields named "descriptor".
   */
  noStandardDescriptorAccessor: boolean;
  /**
   * Is this message deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the message, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating messages.
   */
  deprecated: boolean;
  /**
   * Whether the message is an automatically generated map entry type for the
   * maps field.
   *
   * For maps fields:
   *     map<KeyType, ValueType> map_field = 1;
   * The parsed descriptor looks like:
   *     message MapFieldEntry {
   *         option map_entry = true;
   *         optional KeyType key = 1;
   *         optional ValueType value = 2;
   *     }
   *     repeated MapFieldEntry map_field = 1;
   *
   * Implementations may choose not to generate the map_entry=true message, but
   * use a native map in the target language to hold the keys and values.
   * The reflection APIs in such implementations still need to work as
   * if the field is a repeated message field.
   *
   * NOTE: Do not set the option in .proto files. Always use the maps syntax
   * instead. The option should only be implicitly set by the proto compiler
   * parser.
   */
  mapEntry: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface FieldOptions {
  /**
   * The ctype option instructs the C++ code generator to use a different
   * representation of the field than it normally would.  See the specific
   * options below.  This option is not yet implemented in the open source
   * release -- sorry, we'll try to include it in a future version!
   */
  ctype: FieldOptions_CType;
  /**
   * The packed option can be enabled for repeated primitive fields to enable
   * a more efficient representation on the wire. Rather than repeatedly
   * writing the tag and type for each element, the entire array is encoded as
   * a single length-delimited blob. In proto3, only explicit setting it to
   * false will avoid using packed encoding.
   */
  packed: boolean;
  /**
   * The jstype option determines the JavaScript type used for values of the
   * field.  The option is permitted only for 64 bit integral and fixed types
   * (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING
   * is represented as JavaScript string, which avoids loss of precision that
   * can happen when a large value is converted to a floating point JavaScript.
   * Specifying JS_NUMBER for the jstype causes the generated JavaScript code to
   * use the JavaScript "number" type.  The behavior of the default option
   * JS_NORMAL is implementation dependent.
   *
   * This option is an enum to permit additional types to be added, e.g.
   * goog.math.Integer.
   */
  jstype: FieldOptions_JSType;
  /**
   * Should this field be parsed lazily?  Lazy applies only to message-type
   * fields.  It means that when the outer message is initially parsed, the
   * inner message's contents will not be parsed but instead stored in encoded
   * form.  The inner message will actually be parsed when it is first accessed.
   *
   * This is only a hint.  Implementations are free to choose whether to use
   * eager or lazy parsing regardless of the value of this option.  However,
   * setting this option true suggests that the protocol author believes that
   * using lazy parsing on this field is worth the additional bookkeeping
   * overhead typically needed to implement it.
   *
   * This option does not affect the public interface of any generated code;
   * all method signatures remain the same.  Furthermore, thread-safety of the
   * interface is not affected by this option; const methods remain safe to
   * call from multiple threads concurrently, while non-const methods continue
   * to require exclusive access.
   *
   * Note that implementations may choose not to check required fields within
   * a lazy sub-message.  That is, calling IsInitialized() on the outer message
   * may return true even if the inner message has missing required fields.
   * This is necessary because otherwise the inner message would have to be
   * parsed in order to perform the check, defeating the purpose of lazy
   * parsing.  An implementation which chooses not to check required fields
   * must be consistent about it.  That is, for any particular sub-message, the
   * implementation must either *always* check its required fields, or *never*
   * check its required fields, regardless of whether or not the message has
   * been parsed.
   */
  lazy: boolean;
  /**
   * Is this field deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for accessors, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating fields.
   */
  deprecated: boolean;
  /** For Google-internal migration only. Do not use. */
  weak: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export enum FieldOptions_CType {
  /** STRING - Default mode. */
  STRING = 0,
  CORD = 1,
  STRING_PIECE = 2,
  UNRECOGNIZED = -1,
}

export enum FieldOptions_JSType {
  /** JS_NORMAL - Use the default type. */
  JS_NORMAL = 0,
  /** JS_STRING - Use JavaScript strings. */
  JS_STRING = 1,
  /** JS_NUMBER - Use JavaScript numbers. */
  JS_NUMBER = 2,
  UNRECOGNIZED = -1,
}

export interface OneofOptions {
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumOptions {
  /**
   * Set this option to true to allow mapping different tag names to the same
   * value.
   */
  allowAlias: boolean;
  /**
   * Is this enum deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum, or it will be completely ignored; in the very least, this
   * is a formalization for deprecating enums.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface EnumValueOptions {
  /**
   * Is this enum value deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the enum value, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating enum values.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface ServiceOptions {
  /**
   * Is this service deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the service, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating services.
   */
  deprecated: boolean;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

export interface MethodOptions {
  /**
   * Is this method deprecated?
   * Depending on the target platform, this can emit Deprecated annotations
   * for the method, or it will be completely ignored; in the very least,
   * this is a formalization for deprecating methods.
   */
  deprecated: boolean;
  idempotencyLevel: MethodOptions_IdempotencyLevel;
  /** The parser stores options it doesn't recognize here. See above. */
  uninterpretedOption: UninterpretedOption[];
}

/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
export enum MethodOptions_IdempotencyLevel {
  IDEMPOTENCY_UNKNOWN = 0,
  /** NO_SIDE_EFFECTS - implies idempotent */
  NO_SIDE_EFFECTS = 1,
  /** IDEMPOTENT - idempotent, but may have side effects */
  IDEMPOTENT = 2,
  UNRECOGNIZED = -1,
}

/**
 * A message representing a option the parser does not recognize. This only
 * appears in options protos created by the compiler::Parser class.
 * DescriptorPool resolves these when building Descriptor objects. Therefore,
 * options protos in descriptor objects (e.g. returned by Descriptor::options(),
 * or produced by Descriptor::CopyTo()) will never have UninterpretedOptions
 * in them.
 */
export interface UninterpretedOption {
  name: UninterpretedOption_NamePart[];
  /**
   * The value of the uninterpreted option, in whatever type the tokenizer
   * identified it as during parsing. Exactly one of these should be set.
   */
  identifierValue: string;
  positiveIntValue: number;
  negativeIntValue: number;
  doubleValue: number;
  stringValue: Uint8Array;
  aggregateValue: string;
}

/**
 * The name of the uninterpreted option.  Each string represents a segment in
 * a dot-separated name.  is_extension is true iff a segment represents an
 * extension (denoted with parentheses in options specs in .proto files).
 * E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents
 * "foo.(bar.baz).qux".
 */
export interface UninterpretedOption_NamePart {
  namePart: string;
  isExtension: boolean;
}

/**
 * Encapsulates information about the original source file from which a
 * FileDescriptorProto was generated.
 */
export interface SourceCodeInfo {
  /**
   * A Location identifies a piece of source code in a .proto file which
   * corresponds to a particular definition.  This information is intended
   * to be useful to IDEs, code indexers, documentation generators, and similar
   * tools.
   *
   * For example, say we have a file like:
   *   message Foo {
   *     optional string foo = 1;
   *   }
   * Let's look at just the field definition:
   *   optional string foo = 1;
   *   ^       ^^     ^^  ^  ^^^
   *   a       bc     de  f  ghi
   * We have the following locations:
   *   span   path               represents
   *   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.
   *   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).
   *   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).
   *   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).
   *   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).
   *
   * Notes:
   * - A location may refer to a repeated field itself (i.e. not to any
   *   particular index within it).  This is used whenever a set of elements are
   *   logically enclosed in a single code segment.  For example, an entire
   *   extend block (possibly containing multiple extension definitions) will
   *   have an outer location whose path refers to the "extensions" repeated
   *   field without an index.
   * - Multiple locations may have the same path.  This happens when a single
   *   logical declaration is spread out across multiple places.  The most
   *   obvious example is the "extend" block again -- there may be multiple
   *   extend blocks in the same scope, each of which will have the same path.
   * - A location's span is not always a subset of its parent's span.  For
   *   example, the "extendee" of an extension declaration appears at the
   *   beginning of the "extend" block and is shared by all extensions within
   *   the block.
   * - Just because a location's span is a subset of some other location's span
   *   does not mean that it is a descendant.  For example, a "group" defines
   *   both a type and a field in a single declaration.  Thus, the locations
   *   corresponding to the type and field and their components will overlap.
   * - Code which tries to interpret locations should probably be designed to
   *   ignore those that it doesn't understand, as more types of locations could
   *   be recorded in the future.
   */
  location: SourceCodeInfo_Location[];
}

export interface SourceCodeInfo_Location {
  /**
   * Identifies which part of the FileDescriptorProto was defined at this
   * location.
   *
   * Each element is a field number or an index.  They form a path from
   * the root FileDescriptorProto to the place where the definition.  For
   * example, this path:
   *   [ 4, 3, 2, 7, 1 ]
   * refers to:
   *   file.message_type(3)  // 4, 3
   *       .field(7)         // 2, 7
   *       .name()           // 1
   * This is because FileDescriptorProto.message_type has field number 4:
   *   repeated DescriptorProto message_type = 4;
   * and DescriptorProto.field has field number 2:
   *   repeated FieldDescriptorProto field = 2;
   * and FieldDescriptorProto.name has field number 1:
   *   optional string name = 1;
   *
   * Thus, the above path gives the location of a field name.  If we removed
   * the last element:
   *   [ 4, 3, 2, 7 ]
   * this path refers to the whole field declaration (from the beginning
   * of the label to the terminating semicolon).
   */
  path: number[];
  /**
   * Always has exactly three or four elements: start line, start column,
   * end line (optional, otherwise assumed same as start line), end column.
   * These are packed into a single field for efficiency.  Note that line
   * and column numbers are zero-based -- typically you will want to add
   * 1 to each before displaying to a user.
   */
  span: number[];
  /**
   * If this SourceCodeInfo represents a complete declaration, these are any
   * comments appearing before and after the declaration which appear to be
   * attached to the declaration.
   *
   * A series of line comments appearing on consecutive lines, with no other
   * tokens appearing on those lines, will be treated as a single comment.
   *
   * leading_detached_comments will keep paragraphs of comments that appear
   * before (but not connected to) the current element. Each paragraph,
   * separated by empty lines, will be one comment element in the repeated
   * field.
   *
   * Only the comment content is provided; comment markers (e.g. //) are
   * stripped out.  For block comments, leading whitespace and an asterisk
   * will be stripped from the beginning of each line other than the first.
   * Newlines are included in the output.
   *
   * Examples:
   *
   *   optional int32 foo = 1;  // Comment attached to foo.
   *   // Comment attached to bar.
   *   optional int32 bar = 2;
   *
   *   optional string baz = 3;
   *   // Comment attached to baz.
   *   // Another line attached to baz.
   *
   *   // Comment attached to qux.
   *   //
   *   // Another line attached to qux.
   *   optional double qux = 4;
   *
   *   // Detached comment for corge. This is not leading or trailing comments
   *   // to qux or corge because there are blank lines separating it from
   *   // both.
   *
   *   // Detached comment for corge paragraph 2.
   *
   *   optional string corge = 5;
   *   /* Block comment attached
   *    * to corge.  Leading asterisks
   *    * will be removed. * /
   *   /* Block comment attached to
   *    * grault. * /
   *   optional int32 grault = 6;
   *
   *   // ignored detached comments.
   */
  leadingComments: string;
  trailingComments: string;
  leadingDetachedComments: string[];
}

/**
 * Describes the relationship between generated code and its original source
 * file. A GeneratedCodeInfo message is associated with only one generated
 * source file, but may contain references to different source .proto files.
 */
export interface GeneratedCodeInfo {
  /**
   * An Annotation connects some span of text in generated code to an element
   * of its generating .proto file.
   */
  annotation: GeneratedCodeInfo_Annotation[];
}

export interface GeneratedCodeInfo_Annotation {
  /**
   * Identifies the element in the original source .proto file. This field
   * is formatted the same as SourceCodeInfo.Location.path.
   */
  path: number[];
  /** Identifies the filesystem path to the original source .proto. */
  sourceFile: string;
  /**
   * Identifies the starting offset in bytes in the generated code
   * that relates to the identified object.
   */
  begin: number;
  /**
   * Identifies the ending offset in bytes in the generated code that
   * relates to the identified offset. The end offset should be one past
   * the last relevant byte (so the length of the text = end - begin).
   */
  end: number;
}

function createBaseFileDescriptorSet(): FileDescriptorSet {
  return { file: [] };
}

export const FileDescriptorSet = {
  encode(message: FileDescriptorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.file) {
      FileDescriptorProto.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFileDescriptorProto(): FileDescriptorProto {
  return {
    name: "",
    package: "",
    dependency: [],
    publicDependency: [],
    weakDependency: [],
    messageType: [],
    enumType: [],
    service: [],
    extension: [],
    options: undefined,
    sourceCodeInfo: undefined,
    syntax: "",
  };
}

export const FileDescriptorProto = {
  encode(message: FileDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.package !== "") {
      writer.uint32(18).string(message.package);
    }
    for (const v of message.dependency) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.publicDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.weakDependency) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.messageType) {
      DescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.service) {
      ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.options !== undefined) {
      FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.sourceCodeInfo !== undefined) {
      SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
    }
    if (message.syntax !== "") {
      writer.uint32(98).string(message.syntax);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.package = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dependency.push(reader.string());
          continue;
        case 10:
          if (tag === 80) {
            message.publicDependency.push(reader.int32());

            continue;
          }

          if (tag === 82) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.publicDependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 11:
          if (tag === 88) {
            message.weakDependency.push(reader.int32());

            continue;
          }

          if (tag === 90) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weakDependency.push(reader.int32());
            }

            continue;
          }

          break;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FileOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.syntax = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDescriptorProto(): DescriptorProto {
  return {
    name: "",
    field: [],
    extension: [],
    nestedType: [],
    enumType: [],
    extensionRange: [],
    oneofDecl: [],
    options: undefined,
    reservedRange: [],
    reservedName: [],
  };
}

export const DescriptorProto = {
  encode(message: DescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.field) {
      FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.extension) {
      FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.nestedType) {
      DescriptorProto.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumType) {
      EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.extensionRange) {
      DescriptorProto_ExtensionRange.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.oneofDecl) {
      OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.options !== undefined) {
      MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      DescriptorProto_ReservedRange.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.extensionRange.push(DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.options = MessageOptions.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.reservedRange.push(DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.reservedName.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDescriptorProto_ExtensionRange(): DescriptorProto_ExtensionRange {
  return { start: 0, end: 0, options: undefined };
}

export const DescriptorProto_ExtensionRange = {
  encode(message: DescriptorProto_ExtensionRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    if (message.options !== undefined) {
      ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ExtensionRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseDescriptorProto_ReservedRange(): DescriptorProto_ReservedRange {
  return { start: 0, end: 0 };
}

export const DescriptorProto_ReservedRange = {
  encode(message: DescriptorProto_ReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescriptorProto_ReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
  return { uninterpretedOption: [] };
}

export const ExtensionRangeOptions = {
  encode(message: ExtensionRangeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExtensionRangeOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExtensionRangeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFieldDescriptorProto(): FieldDescriptorProto {
  return {
    name: "",
    number: 0,
    label: 1,
    type: 1,
    typeName: "",
    extendee: "",
    defaultValue: "",
    oneofIndex: 0,
    jsonName: "",
    options: undefined,
    proto3Optional: false,
  };
}

export const FieldDescriptorProto = {
  encode(message: FieldDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.label !== 1) {
      writer.uint32(32).int32(message.label);
    }
    if (message.type !== 1) {
      writer.uint32(40).int32(message.type);
    }
    if (message.typeName !== "") {
      writer.uint32(50).string(message.typeName);
    }
    if (message.extendee !== "") {
      writer.uint32(18).string(message.extendee);
    }
    if (message.defaultValue !== "") {
      writer.uint32(58).string(message.defaultValue);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(72).int32(message.oneofIndex);
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.options !== undefined) {
      FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
    }
    if (message.proto3Optional === true) {
      writer.uint32(136).bool(message.proto3Optional);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.label = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendee = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.defaultValue = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.oneofIndex = reader.int32();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.jsonName = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.options = FieldOptions.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.proto3Optional = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseOneofDescriptorProto(): OneofDescriptorProto {
  return { name: "", options: undefined };
}

export const OneofDescriptorProto = {
  encode(message: OneofDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.options !== undefined) {
      OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.options = OneofOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumDescriptorProto(): EnumDescriptorProto {
  return { name: "", value: [], options: undefined, reservedRange: [], reservedName: [] };
}

export const EnumDescriptorProto = {
  encode(message: EnumDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.value) {
      EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.reservedRange) {
      EnumDescriptorProto_EnumReservedRange.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.reservedName) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumOptions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.reservedRange.push(EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.reservedName.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumDescriptorProto_EnumReservedRange(): EnumDescriptorProto_EnumReservedRange {
  return { start: 0, end: 0 };
}

export const EnumDescriptorProto_EnumReservedRange = {
  encode(message: EnumDescriptorProto_EnumReservedRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.start !== 0) {
      writer.uint32(8).int32(message.start);
    }
    if (message.end !== 0) {
      writer.uint32(16).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto_EnumReservedRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumDescriptorProto_EnumReservedRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.start = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
  return { name: "", number: 0, options: undefined };
}

export const EnumValueDescriptorProto = {
  encode(message: EnumValueDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.options !== undefined) {
      EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.number = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = EnumValueOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
  return { name: "", method: [], options: undefined };
}

export const ServiceDescriptorProto = {
  encode(message: ServiceDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.method) {
      MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.options !== undefined) {
      ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = ServiceOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMethodDescriptorProto(): MethodDescriptorProto {
  return {
    name: "",
    inputType: "",
    outputType: "",
    options: undefined,
    clientStreaming: false,
    serverStreaming: false,
  };
}

export const MethodDescriptorProto = {
  encode(message: MethodDescriptorProto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.inputType !== "") {
      writer.uint32(18).string(message.inputType);
    }
    if (message.outputType !== "") {
      writer.uint32(26).string(message.outputType);
    }
    if (message.options !== undefined) {
      MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
    }
    if (message.clientStreaming === true) {
      writer.uint32(40).bool(message.clientStreaming);
    }
    if (message.serverStreaming === true) {
      writer.uint32(48).bool(message.serverStreaming);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodDescriptorProto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inputType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputType = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.options = MethodOptions.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.clientStreaming = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.serverStreaming = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFileOptions(): FileOptions {
  return {
    javaPackage: "",
    javaOuterClassname: "",
    javaMultipleFiles: false,
    javaGenerateEqualsAndHash: false,
    javaStringCheckUtf8: false,
    optimizeFor: 1,
    goPackage: "",
    ccGenericServices: false,
    javaGenericServices: false,
    pyGenericServices: false,
    phpGenericServices: false,
    deprecated: false,
    ccEnableArenas: false,
    objcClassPrefix: "",
    csharpNamespace: "",
    swiftPrefix: "",
    phpClassPrefix: "",
    phpNamespace: "",
    phpMetadataNamespace: "",
    rubyPackage: "",
    uninterpretedOption: [],
  };
}

export const FileOptions = {
  encode(message: FileOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.javaPackage !== "") {
      writer.uint32(10).string(message.javaPackage);
    }
    if (message.javaOuterClassname !== "") {
      writer.uint32(66).string(message.javaOuterClassname);
    }
    if (message.javaMultipleFiles === true) {
      writer.uint32(80).bool(message.javaMultipleFiles);
    }
    if (message.javaGenerateEqualsAndHash === true) {
      writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
    }
    if (message.javaStringCheckUtf8 === true) {
      writer.uint32(216).bool(message.javaStringCheckUtf8);
    }
    if (message.optimizeFor !== 1) {
      writer.uint32(72).int32(message.optimizeFor);
    }
    if (message.goPackage !== "") {
      writer.uint32(90).string(message.goPackage);
    }
    if (message.ccGenericServices === true) {
      writer.uint32(128).bool(message.ccGenericServices);
    }
    if (message.javaGenericServices === true) {
      writer.uint32(136).bool(message.javaGenericServices);
    }
    if (message.pyGenericServices === true) {
      writer.uint32(144).bool(message.pyGenericServices);
    }
    if (message.phpGenericServices === true) {
      writer.uint32(336).bool(message.phpGenericServices);
    }
    if (message.deprecated === true) {
      writer.uint32(184).bool(message.deprecated);
    }
    if (message.ccEnableArenas === true) {
      writer.uint32(248).bool(message.ccEnableArenas);
    }
    if (message.objcClassPrefix !== "") {
      writer.uint32(290).string(message.objcClassPrefix);
    }
    if (message.csharpNamespace !== "") {
      writer.uint32(298).string(message.csharpNamespace);
    }
    if (message.swiftPrefix !== "") {
      writer.uint32(314).string(message.swiftPrefix);
    }
    if (message.phpClassPrefix !== "") {
      writer.uint32(322).string(message.phpClassPrefix);
    }
    if (message.phpNamespace !== "") {
      writer.uint32(330).string(message.phpNamespace);
    }
    if (message.phpMetadataNamespace !== "") {
      writer.uint32(354).string(message.phpMetadataNamespace);
    }
    if (message.rubyPackage !== "") {
      writer.uint32(362).string(message.rubyPackage);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.javaPackage = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.javaOuterClassname = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.javaMultipleFiles = reader.bool();
          continue;
        case 20:
          if (tag !== 160) {
            break;
          }

          message.javaGenerateEqualsAndHash = reader.bool();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.javaStringCheckUtf8 = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.optimizeFor = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.goPackage = reader.string();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.ccGenericServices = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.javaGenericServices = reader.bool();
          continue;
        case 18:
          if (tag !== 144) {
            break;
          }

          message.pyGenericServices = reader.bool();
          continue;
        case 42:
          if (tag !== 336) {
            break;
          }

          message.phpGenericServices = reader.bool();
          continue;
        case 23:
          if (tag !== 184) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.ccEnableArenas = reader.bool();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.objcClassPrefix = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.csharpNamespace = reader.string();
          continue;
        case 39:
          if (tag !== 314) {
            break;
          }

          message.swiftPrefix = reader.string();
          continue;
        case 40:
          if (tag !== 322) {
            break;
          }

          message.phpClassPrefix = reader.string();
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.phpNamespace = reader.string();
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.phpMetadataNamespace = reader.string();
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.rubyPackage = reader.string();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMessageOptions(): MessageOptions {
  return {
    messageSetWireFormat: false,
    noStandardDescriptorAccessor: false,
    deprecated: false,
    mapEntry: false,
    uninterpretedOption: [],
  };
}

export const MessageOptions = {
  encode(message: MessageOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.messageSetWireFormat === true) {
      writer.uint32(8).bool(message.messageSetWireFormat);
    }
    if (message.noStandardDescriptorAccessor === true) {
      writer.uint32(16).bool(message.noStandardDescriptorAccessor);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.mapEntry === true) {
      writer.uint32(56).bool(message.mapEntry);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.messageSetWireFormat = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.noStandardDescriptorAccessor = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.mapEntry = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseFieldOptions(): FieldOptions {
  return { ctype: 0, packed: false, jstype: 0, lazy: false, deprecated: false, weak: false, uninterpretedOption: [] };
}

export const FieldOptions = {
  encode(message: FieldOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ctype !== 0) {
      writer.uint32(8).int32(message.ctype);
    }
    if (message.packed === true) {
      writer.uint32(16).bool(message.packed);
    }
    if (message.jstype !== 0) {
      writer.uint32(48).int32(message.jstype);
    }
    if (message.lazy === true) {
      writer.uint32(40).bool(message.lazy);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    if (message.weak === true) {
      writer.uint32(80).bool(message.weak);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ctype = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.packed = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.jstype = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lazy = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.weak = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseOneofOptions(): OneofOptions {
  return { uninterpretedOption: [] };
}

export const OneofOptions = {
  encode(message: OneofOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOneofOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumOptions(): EnumOptions {
  return { allowAlias: false, deprecated: false, uninterpretedOption: [] };
}

export const EnumOptions = {
  encode(message: EnumOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowAlias === true) {
      writer.uint32(16).bool(message.allowAlias);
    }
    if (message.deprecated === true) {
      writer.uint32(24).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.allowAlias = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseEnumValueOptions(): EnumValueOptions {
  return { deprecated: false, uninterpretedOption: [] };
}

export const EnumValueOptions = {
  encode(message: EnumValueOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(8).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValueOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseServiceOptions(): ServiceOptions {
  return { deprecated: false, uninterpretedOption: [] };
}

export const ServiceOptions = {
  encode(message: ServiceOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseMethodOptions(): MethodOptions {
  return { deprecated: false, idempotencyLevel: 0, uninterpretedOption: [] };
}

export const MethodOptions = {
  encode(message: MethodOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deprecated === true) {
      writer.uint32(264).bool(message.deprecated);
    }
    if (message.idempotencyLevel !== 0) {
      writer.uint32(272).int32(message.idempotencyLevel);
    }
    for (const v of message.uninterpretedOption) {
      UninterpretedOption.encode(v!, writer.uint32(7994).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethodOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 33:
          if (tag !== 264) {
            break;
          }

          message.deprecated = reader.bool();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.idempotencyLevel = reader.int32() as any;
          continue;
        case 999:
          if (tag !== 7994) {
            break;
          }

          message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseUninterpretedOption(): UninterpretedOption {
  return {
    name: [],
    identifierValue: "",
    positiveIntValue: 0,
    negativeIntValue: 0,
    doubleValue: 0,
    stringValue: new Uint8Array(0),
    aggregateValue: "",
  };
}

export const UninterpretedOption = {
  encode(message: UninterpretedOption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.name) {
      UninterpretedOption_NamePart.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.identifierValue !== "") {
      writer.uint32(26).string(message.identifierValue);
    }
    if (message.positiveIntValue !== 0) {
      writer.uint32(32).uint64(message.positiveIntValue);
    }
    if (message.negativeIntValue !== 0) {
      writer.uint32(40).int64(message.negativeIntValue);
    }
    if (message.doubleValue !== 0) {
      writer.uint32(49).double(message.doubleValue);
    }
    if (message.stringValue.length !== 0) {
      writer.uint32(58).bytes(message.stringValue);
    }
    if (message.aggregateValue !== "") {
      writer.uint32(66).string(message.aggregateValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name.push(UninterpretedOption_NamePart.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.identifierValue = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.positiveIntValue = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.negativeIntValue = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.doubleValue = reader.double();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.stringValue = reader.bytes();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.aggregateValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseUninterpretedOption_NamePart(): UninterpretedOption_NamePart {
  return { namePart: "", isExtension: false };
}

export const UninterpretedOption_NamePart = {
  encode(message: UninterpretedOption_NamePart, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.namePart !== "") {
      writer.uint32(10).string(message.namePart);
    }
    if (message.isExtension === true) {
      writer.uint32(16).bool(message.isExtension);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUninterpretedOption_NamePart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.namePart = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.isExtension = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSourceCodeInfo(): SourceCodeInfo {
  return { location: [] };
}

export const SourceCodeInfo = {
  encode(message: SourceCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.location) {
      SourceCodeInfo_Location.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location.push(SourceCodeInfo_Location.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseSourceCodeInfo_Location(): SourceCodeInfo_Location {
  return { path: [], span: [], leadingComments: "", trailingComments: "", leadingDetachedComments: [] };
}

export const SourceCodeInfo_Location = {
  encode(message: SourceCodeInfo_Location, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.span) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.leadingComments !== "") {
      writer.uint32(26).string(message.leadingComments);
    }
    if (message.trailingComments !== "") {
      writer.uint32(34).string(message.trailingComments);
    }
    for (const v of message.leadingDetachedComments) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceCodeInfo_Location();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag === 16) {
            message.span.push(reader.int32());

            continue;
          }

          if (tag === 18) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.span.push(reader.int32());
            }

            continue;
          }

          break;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.leadingComments = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.trailingComments = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.leadingDetachedComments.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
  return { annotation: [] };
}

export const GeneratedCodeInfo = {
  encode(message: GeneratedCodeInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.annotation) {
      GeneratedCodeInfo_Annotation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.annotation.push(GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

function createBaseGeneratedCodeInfo_Annotation(): GeneratedCodeInfo_Annotation {
  return { path: [], sourceFile: "", begin: 0, end: 0 };
}

export const GeneratedCodeInfo_Annotation = {
  encode(message: GeneratedCodeInfo_Annotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.sourceFile !== "") {
      writer.uint32(18).string(message.sourceFile);
    }
    if (message.begin !== 0) {
      writer.uint32(24).int32(message.begin);
    }
    if (message.end !== 0) {
      writer.uint32(32).int32(message.end);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGeneratedCodeInfo_Annotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.path.push(reader.int32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }

            continue;
          }

          break;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sourceFile = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.begin = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.end = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },
};

type ProtoMetaMessageOptions = {
  options?: { [key: string]: any };
  fields?: { [key: string]: { [key: string]: any } };
  oneof?: { [key: string]: { [key: string]: any } };
  nested?: { [key: string]: ProtoMetaMessageOptions };
};

export interface ProtoMetadata {
  fileDescriptor: FileDescriptorProto1;
  references: { [key: string]: any };
  dependencies?: ProtoMetadata[];
  options?: {
    options?: { [key: string]: any };
    services?: {
      [key: string]: { options?: { [key: string]: any }; methods?: { [key: string]: { [key: string]: any } } };
    };
    messages?: { [key: string]: ProtoMetaMessageOptions };
    enums?: { [key: string]: { options?: { [key: string]: any }; values?: { [key: string]: { [key: string]: any } } } };
  };
}

export const protoMetadata: ProtoMetadata = {
  fileDescriptor: FileDescriptorProto1.fromPartial({
    "name": "google/protobuf/descriptor.proto",
    "package": "google.protobuf",
    "dependency": [],
    "publicDependency": [],
    "weakDependency": [],
    "messageType": [{
      "name": "FileDescriptorSet",
      "field": [{
        "name": "file",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FileDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "file",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "package",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "package",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "dependency",
        "number": 3,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "dependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "public_dependency",
        "number": 10,
        "label": 3,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "publicDependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weak_dependency",
        "number": 11,
        "label": 3,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "weakDependency",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "message_type",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "messageType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "enum_type",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "enumType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "service",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.ServiceDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "service",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension",
        "number": 7,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extension",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.FileOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "source_code_info",
        "number": 9,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.SourceCodeInfo",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "sourceCodeInfo",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "syntax",
        "number": 12,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "syntax",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "DescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "field",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "field",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension",
        "number": 6,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.FieldDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extension",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "nested_type",
        "number": 3,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "nestedType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "enum_type",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "enumType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extension_range",
        "number": 5,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto.ExtensionRange",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extensionRange",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "oneof_decl",
        "number": 8,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.OneofDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "oneofDecl",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 7,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.MessageOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_range",
        "number": 9,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.DescriptorProto.ReservedRange",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedRange",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_name",
        "number": 10,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedName",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "ExtensionRange",
        "field": [{
          "name": "start",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "start",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 2,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "options",
          "number": 3,
          "label": 1,
          "type": 11,
          "typeName": ".google.protobuf.ExtensionRangeOptions",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "options",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "ReservedRange",
        "field": [{
          "name": "start",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "start",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 2,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ExtensionRangeOptions",
      "field": [{
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FieldDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "number",
        "number": 3,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "number",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "label",
        "number": 4,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldDescriptorProto.Label",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "label",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type",
        "number": 5,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldDescriptorProto.Type",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "type",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "type_name",
        "number": 6,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "typeName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "extendee",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "extendee",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "default_value",
        "number": 7,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "defaultValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "oneof_index",
        "number": 9,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "oneofIndex",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "json_name",
        "number": 10,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "jsonName",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 8,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.FieldOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "proto3_optional",
        "number": 17,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "proto3Optional",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "Type",
        "value": [
          { "name": "TYPE_DOUBLE", "number": 1, "options": undefined },
          { "name": "TYPE_FLOAT", "number": 2, "options": undefined },
          { "name": "TYPE_INT64", "number": 3, "options": undefined },
          { "name": "TYPE_UINT64", "number": 4, "options": undefined },
          { "name": "TYPE_INT32", "number": 5, "options": undefined },
          { "name": "TYPE_FIXED64", "number": 6, "options": undefined },
          { "name": "TYPE_FIXED32", "number": 7, "options": undefined },
          { "name": "TYPE_BOOL", "number": 8, "options": undefined },
          { "name": "TYPE_STRING", "number": 9, "options": undefined },
          { "name": "TYPE_GROUP", "number": 10, "options": undefined },
          { "name": "TYPE_MESSAGE", "number": 11, "options": undefined },
          { "name": "TYPE_BYTES", "number": 12, "options": undefined },
          { "name": "TYPE_UINT32", "number": 13, "options": undefined },
          { "name": "TYPE_ENUM", "number": 14, "options": undefined },
          { "name": "TYPE_SFIXED32", "number": 15, "options": undefined },
          { "name": "TYPE_SFIXED64", "number": 16, "options": undefined },
          { "name": "TYPE_SINT32", "number": 17, "options": undefined },
          { "name": "TYPE_SINT64", "number": 18, "options": undefined },
        ],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "Label",
        "value": [{ "name": "LABEL_OPTIONAL", "number": 1, "options": undefined }, {
          "name": "LABEL_REQUIRED",
          "number": 2,
          "options": undefined,
        }, { "name": "LABEL_REPEATED", "number": 3, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "OneofDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 2,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.OneofOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "value",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumValueDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "value",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.EnumOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_range",
        "number": 4,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.EnumDescriptorProto.EnumReservedRange",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedRange",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "reserved_name",
        "number": 5,
        "label": 3,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "reservedName",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "EnumReservedRange",
        "field": [{
          "name": "start",
          "number": 1,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "start",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 2,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumValueDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "number",
        "number": 2,
        "label": 1,
        "type": 5,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "number",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.EnumValueOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServiceDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "method",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.MethodDescriptorProto",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "method",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 3,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.ServiceOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MethodDescriptorProto",
      "field": [{
        "name": "name",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "input_type",
        "number": 2,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "inputType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "output_type",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "outputType",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "options",
        "number": 4,
        "label": 1,
        "type": 11,
        "typeName": ".google.protobuf.MethodOptions",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "options",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "client_streaming",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "clientStreaming",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "server_streaming",
        "number": 6,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "serverStreaming",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "FileOptions",
      "field": [{
        "name": "java_package",
        "number": 1,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "javaPackage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_outer_classname",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "javaOuterClassname",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_multiple_files",
        "number": 10,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaMultipleFiles",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_generate_equals_and_hash",
        "number": 20,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "javaGenerateEqualsAndHash",
        "options": {
          "ctype": 0,
          "packed": false,
          "jstype": 0,
          "lazy": false,
          "deprecated": true,
          "weak": false,
          "uninterpretedOption": [],
        },
        "proto3Optional": false,
      }, {
        "name": "java_string_check_utf8",
        "number": 27,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaStringCheckUtf8",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "optimize_for",
        "number": 9,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FileOptions.OptimizeMode",
        "extendee": "",
        "defaultValue": "SPEED",
        "oneofIndex": 0,
        "jsonName": "optimizeFor",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "go_package",
        "number": 11,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "goPackage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "cc_generic_services",
        "number": 16,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "ccGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "java_generic_services",
        "number": 17,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "javaGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "py_generic_services",
        "number": 18,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "pyGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "php_generic_services",
        "number": 42,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "phpGenericServices",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 23,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "cc_enable_arenas",
        "number": 31,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "true",
        "oneofIndex": 0,
        "jsonName": "ccEnableArenas",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "objc_class_prefix",
        "number": 36,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "objcClassPrefix",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "csharp_namespace",
        "number": 37,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "csharpNamespace",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "swift_prefix",
        "number": 39,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "swiftPrefix",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "php_class_prefix",
        "number": 40,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "phpClassPrefix",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "php_namespace",
        "number": 41,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "phpNamespace",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "php_metadata_namespace",
        "number": 44,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "phpMetadataNamespace",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "ruby_package",
        "number": 45,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "rubyPackage",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "OptimizeMode",
        "value": [{ "name": "SPEED", "number": 1, "options": undefined }, {
          "name": "CODE_SIZE",
          "number": 2,
          "options": undefined,
        }, { "name": "LITE_RUNTIME", "number": 3, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [{ "start": 38, "end": 39 }],
      "reservedName": [],
    }, {
      "name": "MessageOptions",
      "field": [{
        "name": "message_set_wire_format",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "messageSetWireFormat",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "no_standard_descriptor_accessor",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "noStandardDescriptorAccessor",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "map_entry",
        "number": 7,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "mapEntry",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [{ "start": 4, "end": 5 }, { "start": 5, "end": 6 }, { "start": 6, "end": 7 }, {
        "start": 8,
        "end": 9,
      }, { "start": 9, "end": 10 }],
      "reservedName": [],
    }, {
      "name": "FieldOptions",
      "field": [{
        "name": "ctype",
        "number": 1,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldOptions.CType",
        "extendee": "",
        "defaultValue": "STRING",
        "oneofIndex": 0,
        "jsonName": "ctype",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "packed",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "packed",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "jstype",
        "number": 6,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.FieldOptions.JSType",
        "extendee": "",
        "defaultValue": "JS_NORMAL",
        "oneofIndex": 0,
        "jsonName": "jstype",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "lazy",
        "number": 5,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "lazy",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "weak",
        "number": 10,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "weak",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "CType",
        "value": [{ "name": "STRING", "number": 0, "options": undefined }, {
          "name": "CORD",
          "number": 1,
          "options": undefined,
        }, { "name": "STRING_PIECE", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }, {
        "name": "JSType",
        "value": [{ "name": "JS_NORMAL", "number": 0, "options": undefined }, {
          "name": "JS_STRING",
          "number": 1,
          "options": undefined,
        }, { "name": "JS_NUMBER", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [{ "start": 4, "end": 5 }],
      "reservedName": [],
    }, {
      "name": "OneofOptions",
      "field": [{
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "EnumOptions",
      "field": [{
        "name": "allow_alias",
        "number": 2,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "allowAlias",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "deprecated",
        "number": 3,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [{ "start": 5, "end": 6 }],
      "reservedName": [],
    }, {
      "name": "EnumValueOptions",
      "field": [{
        "name": "deprecated",
        "number": 1,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "ServiceOptions",
      "field": [{
        "name": "deprecated",
        "number": 33,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "MethodOptions",
      "field": [{
        "name": "deprecated",
        "number": 33,
        "label": 1,
        "type": 8,
        "typeName": "",
        "extendee": "",
        "defaultValue": "false",
        "oneofIndex": 0,
        "jsonName": "deprecated",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "idempotency_level",
        "number": 34,
        "label": 1,
        "type": 14,
        "typeName": ".google.protobuf.MethodOptions.IdempotencyLevel",
        "extendee": "",
        "defaultValue": "IDEMPOTENCY_UNKNOWN",
        "oneofIndex": 0,
        "jsonName": "idempotencyLevel",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "uninterpreted_option",
        "number": 999,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "uninterpretedOption",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [],
      "enumType": [{
        "name": "IdempotencyLevel",
        "value": [{ "name": "IDEMPOTENCY_UNKNOWN", "number": 0, "options": undefined }, {
          "name": "NO_SIDE_EFFECTS",
          "number": 1,
          "options": undefined,
        }, { "name": "IDEMPOTENT", "number": 2, "options": undefined }],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "extensionRange": [{ "start": 1000, "end": 536870912, "options": undefined }],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "UninterpretedOption",
      "field": [{
        "name": "name",
        "number": 2,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.UninterpretedOption.NamePart",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "name",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "identifier_value",
        "number": 3,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "identifierValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "positive_int_value",
        "number": 4,
        "label": 1,
        "type": 4,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "positiveIntValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "negative_int_value",
        "number": 5,
        "label": 1,
        "type": 3,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "negativeIntValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "double_value",
        "number": 6,
        "label": 1,
        "type": 1,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "doubleValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "string_value",
        "number": 7,
        "label": 1,
        "type": 12,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "stringValue",
        "options": undefined,
        "proto3Optional": false,
      }, {
        "name": "aggregate_value",
        "number": 8,
        "label": 1,
        "type": 9,
        "typeName": "",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "aggregateValue",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "NamePart",
        "field": [{
          "name": "name_part",
          "number": 1,
          "label": 2,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "namePart",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "is_extension",
          "number": 2,
          "label": 2,
          "type": 8,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "isExtension",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "SourceCodeInfo",
      "field": [{
        "name": "location",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.SourceCodeInfo.Location",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "location",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "Location",
        "field": [{
          "name": "path",
          "number": 1,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "path",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "span",
          "number": 2,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "span",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "leading_comments",
          "number": 3,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "leadingComments",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "trailing_comments",
          "number": 4,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "trailingComments",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "leading_detached_comments",
          "number": 6,
          "label": 3,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "leadingDetachedComments",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }, {
      "name": "GeneratedCodeInfo",
      "field": [{
        "name": "annotation",
        "number": 1,
        "label": 3,
        "type": 11,
        "typeName": ".google.protobuf.GeneratedCodeInfo.Annotation",
        "extendee": "",
        "defaultValue": "",
        "oneofIndex": 0,
        "jsonName": "annotation",
        "options": undefined,
        "proto3Optional": false,
      }],
      "extension": [],
      "nestedType": [{
        "name": "Annotation",
        "field": [{
          "name": "path",
          "number": 1,
          "label": 3,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "path",
          "options": {
            "ctype": 0,
            "packed": true,
            "jstype": 0,
            "lazy": false,
            "deprecated": false,
            "weak": false,
            "uninterpretedOption": [],
          },
          "proto3Optional": false,
        }, {
          "name": "source_file",
          "number": 2,
          "label": 1,
          "type": 9,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "sourceFile",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "begin",
          "number": 3,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "begin",
          "options": undefined,
          "proto3Optional": false,
        }, {
          "name": "end",
          "number": 4,
          "label": 1,
          "type": 5,
          "typeName": "",
          "extendee": "",
          "defaultValue": "",
          "oneofIndex": 0,
          "jsonName": "end",
          "options": undefined,
          "proto3Optional": false,
        }],
        "extension": [],
        "nestedType": [],
        "enumType": [],
        "extensionRange": [],
        "oneofDecl": [],
        "options": undefined,
        "reservedRange": [],
        "reservedName": [],
      }],
      "enumType": [],
      "extensionRange": [],
      "oneofDecl": [],
      "options": undefined,
      "reservedRange": [],
      "reservedName": [],
    }],
    "enumType": [],
    "service": [],
    "extension": [],
    "options": {
      "javaPackage": "com.google.protobuf",
      "javaOuterClassname": "DescriptorProtos",
      "javaMultipleFiles": false,
      "javaGenerateEqualsAndHash": false,
      "javaStringCheckUtf8": false,
      "optimizeFor": 1,
      "goPackage": "google.golang.org/protobuf/types/descriptorpb",
      "ccGenericServices": false,
      "javaGenericServices": false,
      "pyGenericServices": false,
      "phpGenericServices": false,
      "deprecated": false,
      "ccEnableArenas": true,
      "objcClassPrefix": "GPB",
      "csharpNamespace": "Google.Protobuf.Reflection",
      "swiftPrefix": "",
      "phpClassPrefix": "",
      "phpNamespace": "",
      "phpMetadataNamespace": "",
      "rubyPackage": "",
      "uninterpretedOption": [],
    },
    "sourceCodeInfo": {
      "location": [{
        "path": [8, 9],
        "span": [52, 0, 28],
        "leadingComments":
          " descriptor.proto must be optimized for speed because reflection-based\n algorithms don't work during bootstrapping.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 0],
        "span": [56, 0, 58, 1],
        "leadingComments":
          " The protocol compiler can output a FileDescriptorSet containing the .proto\n files it parses.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1],
        "span": [61, 0, 90, 1],
        "leadingComments": " Describes a complete .proto file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 0],
        "span": [62, 2, 27],
        "leadingComments": "",
        "trailingComments": " file name, relative to root of source tree\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 1],
        "span": [63, 2, 30],
        "leadingComments": "",
        "trailingComments": ' e.g. "foo", "foo.bar", etc.\n',
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 2],
        "span": [66, 2, 33],
        "leadingComments": " Names of files imported by this file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 3],
        "span": [68, 2, 40],
        "leadingComments": " Indexes of the public imported files in the dependency list above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 4],
        "span": [71, 2, 38],
        "leadingComments":
          " Indexes of the weak imported files in the dependency list.\n For Google-internal migration only. Do not use.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 5],
        "span": [74, 2, 44],
        "leadingComments": " All top-level definitions in this file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 10],
        "span": [85, 2, 47],
        "leadingComments":
          " This field contains optional information about the original source code.\n You may safely remove this entire field without harming runtime\n functionality of the descriptors -- the information is needed only by\n development tools.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 1, 2, 11],
        "span": [89, 2, 30],
        "leadingComments": ' The syntax of the proto file.\n The supported values are "proto2" and "proto3".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2],
        "span": [93, 0, 125, 1],
        "leadingComments": " Describes a message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 0, 2, 0],
        "span": [103, 4, 29],
        "leadingComments": "",
        "trailingComments": " Inclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 0, 2, 1],
        "span": [104, 4, 27],
        "leadingComments": "",
        "trailingComments": " Exclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1],
        "span": [117, 2, 120, 3],
        "leadingComments":
          " Range of reserved tag numbers. Reserved tag numbers may not be used by\n fields or extension ranges in the same message. Reserved ranges may\n not overlap.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1, 2, 0],
        "span": [118, 4, 29],
        "leadingComments": "",
        "trailingComments": " Inclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 3, 1, 2, 1],
        "span": [119, 4, 27],
        "leadingComments": "",
        "trailingComments": " Exclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 2, 2, 9],
        "span": [124, 2, 37],
        "leadingComments":
          " Reserved field names, which may not be used by fields in the same message.\n A given name may only be reserved once.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 2, 0],
        "span": [129, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 3, 5],
        "span": [133, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4],
        "span": [137, 0, 238, 1],
        "leadingComments": " Describes a field within a message.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 0],
        "span": [141, 4, 20],
        "leadingComments": " 0 is reserved for errors.\n Order is weird for historical reasons.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 2],
        "span": [145, 4, 19],
        "leadingComments":
          " Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if\n negative values are likely.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 4],
        "span": [149, 4, 19],
        "leadingComments":
          " Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if\n negative values are likely.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 9],
        "span": [158, 4, 20],
        "leadingComments":
          " Tag-delimited aggregate.\n Group type is deprecated and not supported in proto3. However, Proto3\n implementations should still be able to parse the group wire format and\n treat group fields as unknown fields.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 10],
        "span": [159, 4, 22],
        "leadingComments": "",
        "trailingComments": " Length-delimited aggregate.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 11],
        "span": [162, 4, 20],
        "leadingComments": " New in version 2.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 16],
        "span": [167, 4, 21],
        "leadingComments": "",
        "trailingComments": " Uses ZigZag encoding.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 0, 2, 17],
        "span": [168, 4, 21],
        "leadingComments": "",
        "trailingComments": " Uses ZigZag encoding.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 4, 1, 2, 0],
        "span": [173, 4, 23],
        "leadingComments": " 0 is reserved for errors\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 3],
        "span": [184, 2, 25],
        "leadingComments":
          " If type_name is set, this need not be set.  If both this and type_name\n are set, this must be one of TYPE_ENUM, TYPE_MESSAGE or TYPE_GROUP.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 4],
        "span": [191, 2, 32],
        "leadingComments":
          " For message and enum types, this is the name of the type.  If the name\n starts with a '.', it is fully-qualified.  Otherwise, C++-like scoping\n rules are used to find the type (i.e. first the nested types within this\n message are searched, then within the parent, on up to the root\n namespace).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 5],
        "span": [195, 2, 31],
        "leadingComments":
          " For extensions, this is the name of the type being extended.  It is\n resolved in the same manner as type_name.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 6],
        "span": [202, 2, 36],
        "leadingComments":
          ' For numeric types, contains the original text representation of the value.\n For booleans, "true" or "false".\n For strings, contains the default text contents (not escaped in any way).\n For bytes, contains the C escaped value.  All bytes >= 128 are escaped.\n TODO(kenton):  Base-64 encode?\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 7],
        "span": [206, 2, 33],
        "leadingComments":
          " If set, gives the index of a oneof in the containing type's oneof_decl\n list.  This field is a member of that oneof.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 8],
        "span": [212, 2, 33],
        "leadingComments":
          " JSON name of this field. The value is set by protocol compiler. If the\n user has set a \"json_name\" option on this field, that option's value\n will be used. Otherwise, it's deduced from the field's name by converting\n it to camelCase.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 4, 2, 10],
        "span": [237, 2, 37],
        "leadingComments":
          ' If true, this is a proto3 "optional". When a proto3 field is optional, it\n tracks presence regardless of field type.\n\n When proto3_optional is true, this field must be belong to a oneof to\n signal to old proto3 clients that presence is tracked for this field. This\n oneof is known as a "synthetic" oneof, and this field must be its sole\n member (each proto3 optional field gets its own synthetic oneof). Synthetic\n oneofs exist in the descriptor only, and do not generate any API. Synthetic\n oneofs must be ordered after all "real" oneofs.\n\n For message fields, proto3_optional doesn\'t create any semantic change,\n since non-repeated message fields always track presence. However it still\n indicates the semantic detail of whether the user wrote "optional" or not.\n This can be useful for round-tripping the .proto file. For consistency we\n give message fields a synthetic oneof also, even though it is not required\n to track presence. This is especially important because the parser can\'t\n tell if a field is a message or an enum, so it must always create a\n synthetic oneof.\n\n Proto2 optional fields do not set this flag, because they already indicate\n optional with `LABEL_OPTIONAL`.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 5],
        "span": [241, 0, 244, 1],
        "leadingComments": " Describes a oneof.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6],
        "span": [247, 0, 273, 1],
        "leadingComments": " Describes an enum type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 3, 0],
        "span": [260, 2, 263, 3],
        "leadingComments":
          " Range of reserved numeric values. Reserved values may not be used by\n entries in the same enum. Reserved ranges may not overlap.\n\n Note that this is distinct from DescriptorProto.ReservedRange in that it\n is inclusive such that it can appropriately represent the entire int32\n domain.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 3, 0, 2, 0],
        "span": [261, 4, 29],
        "leadingComments": "",
        "trailingComments": " Inclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 3, 0, 2, 1],
        "span": [262, 4, 27],
        "leadingComments": "",
        "trailingComments": " Inclusive.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 3],
        "span": [268, 2, 48],
        "leadingComments":
          " Range of reserved numeric values. Reserved numeric values may not be used\n by enum values in the same enum declaration. Reserved ranges may not\n overlap.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 6, 2, 4],
        "span": [272, 2, 36],
        "leadingComments":
          " Reserved enum value names, which may not be reused. A given name may only\n be reserved once.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 7],
        "span": [276, 0, 281, 1],
        "leadingComments": " Describes a value within an enum.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 8],
        "span": [284, 0, 289, 1],
        "leadingComments": " Describes a service.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9],
        "span": [292, 0, 306, 1],
        "leadingComments": " Describes a method of a service.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 1],
        "span": [297, 2, 33],
        "leadingComments":
          " Input and output type names.  These are resolved in the same way as\n FieldDescriptorProto.type_name, but must refer to a message type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 4],
        "span": [303, 2, 55],
        "leadingComments": " Identifies if client streams multiple client messages\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 9, 2, 5],
        "span": [305, 2, 55],
        "leadingComments": " Identifies if server streams multiple server messages\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 0],
        "span": [347, 2, 35],
        "leadingComments":
          " Sets the Java package where classes generated from this .proto will be\n placed.  By default, the proto package is used, but this is often\n inappropriate because proto packages do not normally start with backwards\n domain names.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 1],
        "span": [355, 2, 43],
        "leadingComments":
          " Controls the name of the wrapper Java class generated for the .proto file.\n That class will always contain the .proto file's getDescriptor() method as\n well as any top-level extensions defined in the .proto file.\n If java_multiple_files is disabled, then all the other classes from the\n .proto file will be nested inside the single wrapper outer class.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 2],
        "span": [363, 2, 59],
        "leadingComments":
          " If enabled, then the Java code generator will generate a separate .java\n file for each top-level message, enum, and service defined in the .proto\n file.  Thus, these types will *not* be nested inside the wrapper class\n named by java_outer_classname.  However, the wrapper class will still be\n generated to contain the file's getDescriptor() method as well as any\n top-level extensions defined in the file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 3],
        "span": [366, 2, 69],
        "leadingComments": " This option does nothing.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 4],
        "span": [374, 2, 62],
        "leadingComments":
          " If set true, then the Java2 code generator will generate code that\n throws an exception whenever an attempt is made to assign a non-UTF-8\n byte sequence to a string field.\n Message reflection will do the same.\n However, an extension field still accepts non-UTF-8 byte sequences.\n This option has no effect on when used with the lite runtime.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 4, 0],
        "span": [378, 2, 383, 3],
        "leadingComments": " Generated classes can be optimized for speed or code size.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 4, 0, 2, 0],
        "span": [379, 4, 14],
        "leadingComments": "",
        "trailingComments": " Generate complete code for parsing, serialization,\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 4, 0, 2, 1],
        "span": [381, 4, 18],
        "leadingComments": " etc.\n",
        "trailingComments": " Use ReflectionOps to implement these methods.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 4, 0, 2, 2],
        "span": [382, 4, 21],
        "leadingComments": "",
        "trailingComments": " Generate code using MessageLite and the lite runtime.\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 6],
        "span": [391, 2, 34],
        "leadingComments":
          " Sets the Go package where structs generated from this .proto will be\n placed. If omitted, the Go package will be derived from the following:\n   - The basename of the package import path, if provided.\n   - Otherwise, the package statement in the .proto file, if present.\n   - Otherwise, the basename of the .proto file, without extension.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 7],
        "span": [406, 2, 59],
        "leadingComments":
          ' Should generic services be generated in each language?  "Generic" services\n are not specific to any particular RPC system.  They are generated by the\n main code generators in each language (without additional plugins).\n Generic services were the only kind of service generation supported by\n early versions of google.protobuf.\n\n Generic services are now considered deprecated in favor of using plugins\n that generate code specific to your particular RPC system.  Therefore,\n these default to false.  Old code which depends on generic services should\n explicitly set them to true.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 11],
        "span": [415, 2, 50],
        "leadingComments":
          " Is this file deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for everything in the file, or it will be completely ignored; in the very\n least, this is a formalization for deprecating files.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 12],
        "span": [419, 2, 55],
        "leadingComments":
          " Enables the use of arenas for the proto messages in this file. This applies\n only to generated classes for C++.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 13],
        "span": [424, 2, 41],
        "leadingComments":
          " Sets the objective c class prefix which is prepended to all objective c\n generated classes from this .proto. There is no default.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 14],
        "span": [427, 2, 40],
        "leadingComments": " Namespace for generated classes; defaults to the package.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 15],
        "span": [433, 2, 36],
        "leadingComments":
          " By default Swift generators will take the proto package and CamelCase it\n replacing '.' with underscore and use that to prefix the types/symbols\n defined. When this options is provided, they will use this value instead\n to prefix the types/symbols defined.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 16],
        "span": [437, 2, 40],
        "leadingComments":
          " Sets the php class prefix which is prepended to all php generated classes\n from this .proto. Default is empty.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 17],
        "span": [442, 2, 37],
        "leadingComments":
          " Use this option to change the namespace of php generated classes. Default\n is empty. When this option is empty, the package name will be used for\n determining the namespace.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 18],
        "span": [447, 2, 46],
        "leadingComments":
          " Use this option to change the namespace of php generated metadata classes.\n Default is empty. When this option is empty, the proto file name will be\n used for determining the namespace.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 19],
        "span": [452, 2, 36],
        "leadingComments":
          " Use this option to change the package of ruby generated classes. Default\n is empty. When this option is not set, the package name will be used for\n determining the ruby package.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 2, 20],
        "span": [457, 2, 58],
        "leadingComments":
          ' The parser stores options it doesn\'t recognize here.\n See the documentation for the "Options" section above.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 10, 5],
        "span": [461, 2, 25],
        "leadingComments":
          ' Clients can define custom options in extensions of this message.\n See the documentation for the "Options" section above.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 0],
        "span": [485, 2, 62],
        "leadingComments":
          " Set true to use the old proto1 MessageSet wire format for extensions.\n This is provided for backwards-compatibility with the MessageSet wire\n format.  You should not use this for any other reason:  It's less\n efficient, has fewer features, and is more complicated.\n\n The message must be defined exactly as follows:\n   message Foo {\n     option message_set_wire_format = true;\n     extensions 4 to max;\n   }\n Note that the message cannot have any defined fields; MessageSets only\n have extensions.\n\n All extensions of your type must be singular messages; e.g. they cannot\n be int32s, enums, or repeated messages.\n\n Because this is an option, the above two restrictions are not enforced by\n the protocol compiler.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 1],
        "span": [490, 2, 70],
        "leadingComments":
          ' Disables the generation of the standard "descriptor()" accessor, which can\n conflict with a field of the same name.  This is meant to make migration\n from proto1 easier; new code should avoid fields named "descriptor".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 2],
        "span": [496, 2, 49],
        "leadingComments":
          " Is this message deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the message, or it will be completely ignored; in the very least,\n this is a formalization for deprecating messages.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 3],
        "span": [521, 2, 30],
        "leadingComments":
          " Whether the message is an automatically generated map entry type for the\n maps field.\n\n For maps fields:\n     map<KeyType, ValueType> map_field = 1;\n The parsed descriptor looks like:\n     message MapFieldEntry {\n         option map_entry = true;\n         optional KeyType key = 1;\n         optional ValueType value = 2;\n     }\n     repeated MapFieldEntry map_field = 1;\n\n Implementations may choose not to generate the map_entry=true message, but\n use a native map in the target language to hold the keys and values.\n The reflection APIs in such implementations still need to work as\n if the field is a repeated message field.\n\n NOTE: Do not set the option in .proto files. Always use the maps syntax\n instead. The option should only be implicitly set by the proto compiler\n parser.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 9],
        "span": [523, 2, 13],
        "leadingComments": "",
        "trailingComments": " javalite_serializable\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 9],
        "span": [524, 2, 13],
        "leadingComments": "",
        "trailingComments": " javanano_as_lite\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 2, 4],
        "span": [528, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 11, 5],
        "span": [531, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 0],
        "span": [539, 2, 46],
        "leadingComments":
          " The ctype option instructs the C++ code generator to use a different\n representation of the field than it normally would.  See the specific\n options below.  This option is not yet implemented in the open source\n release -- sorry, we'll try to include it in a future version!\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 4, 0, 2, 0],
        "span": [542, 4, 15],
        "leadingComments": " Default mode.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 1],
        "span": [553, 2, 27],
        "leadingComments":
          " The packed option can be enabled for repeated primitive fields to enable\n a more efficient representation on the wire. Rather than repeatedly\n writing the tag and type for each element, the entire array is encoded as\n a single length-delimited blob. In proto3, only explicit setting it to\n false will avoid using packed encoding.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 2],
        "span": [566, 2, 51],
        "leadingComments":
          ' The jstype option determines the JavaScript type used for values of the\n field.  The option is permitted only for 64 bit integral and fixed types\n (int64, uint64, sint64, fixed64, sfixed64).  A field with jstype JS_STRING\n is represented as JavaScript string, which avoids loss of precision that\n can happen when a large value is converted to a floating point JavaScript.\n Specifying JS_NUMBER for the jstype causes the generated JavaScript code to\n use the JavaScript "number" type.  The behavior of the default option\n JS_NORMAL is implementation dependent.\n\n This option is an enum to permit additional types to be added, e.g.\n goog.math.Integer.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 4, 1, 2, 0],
        "span": [569, 4, 18],
        "leadingComments": " Use the default type.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 4, 1, 2, 1],
        "span": [572, 4, 18],
        "leadingComments": " Use JavaScript strings.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 4, 1, 2, 2],
        "span": [575, 4, 18],
        "leadingComments": " Use JavaScript numbers.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 3],
        "span": [606, 2, 43],
        "leadingComments":
          " Should this field be parsed lazily?  Lazy applies only to message-type\n fields.  It means that when the outer message is initially parsed, the\n inner message's contents will not be parsed but instead stored in encoded\n form.  The inner message will actually be parsed when it is first accessed.\n\n This is only a hint.  Implementations are free to choose whether to use\n eager or lazy parsing regardless of the value of this option.  However,\n setting this option true suggests that the protocol author believes that\n using lazy parsing on this field is worth the additional bookkeeping\n overhead typically needed to implement it.\n\n This option does not affect the public interface of any generated code;\n all method signatures remain the same.  Furthermore, thread-safety of the\n interface is not affected by this option; const methods remain safe to\n call from multiple threads concurrently, while non-const methods continue\n to require exclusive access.\n\n\n Note that implementations may choose not to check required fields within\n a lazy sub-message.  That is, calling IsInitialized() on the outer message\n may return true even if the inner message has missing required fields.\n This is necessary because otherwise the inner message would have to be\n parsed in order to perform the check, defeating the purpose of lazy\n parsing.  An implementation which chooses not to check required fields\n must be consistent about it.  That is, for any particular sub-message, the\n implementation must either *always* check its required fields, or *never*\n check its required fields, regardless of whether or not the message has\n been parsed.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 4],
        "span": [612, 2, 49],
        "leadingComments":
          " Is this field deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for accessors, or it will be completely ignored; in the very least, this\n is a formalization for deprecating fields.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 5],
        "span": [615, 2, 44],
        "leadingComments": " For Google-internal migration only. Do not use.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 2, 6],
        "span": [619, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 5],
        "span": [622, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 12, 9],
        "span": [624, 2, 13],
        "leadingComments": "",
        "trailingComments": " removed jtype\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 2, 0],
        "span": [629, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 13, 5],
        "span": [632, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 2, 0],
        "span": [639, 2, 32],
        "leadingComments": " Set this option to true to allow mapping different tag names to the same\n value.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 2, 1],
        "span": [645, 2, 49],
        "leadingComments":
          " Is this enum deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the enum, or it will be completely ignored; in the very least, this\n is a formalization for deprecating enums.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 9],
        "span": [647, 2, 13],
        "leadingComments": "",
        "trailingComments": " javanano_as_lite\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 2, 2],
        "span": [650, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 14, 5],
        "span": [653, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 2, 0],
        "span": [661, 2, 49],
        "leadingComments":
          " Is this enum value deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the enum value, or it will be completely ignored; in the very least,\n this is a formalization for deprecating enum values.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 2, 1],
        "span": [664, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 15, 5],
        "span": [667, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16, 2, 0],
        "span": [681, 2, 50],
        "leadingComments":
          " Is this service deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the service, or it will be completely ignored; in the very least,\n this is a formalization for deprecating services.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          " Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n   framework.  We apologize for hoarding these numbers to ourselves, but\n   we were already using them long before we decided to release Protocol\n   Buffers.\n",
        ],
      }, {
        "path": [4, 16, 2, 1],
        "span": [684, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 16, 5],
        "span": [687, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 2, 0],
        "span": [701, 2, 50],
        "leadingComments":
          " Is this method deprecated?\n Depending on the target platform, this can emit Deprecated annotations\n for the method, or it will be completely ignored; in the very least,\n this is a formalization for deprecating methods.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          " Note:  Field numbers 1 through 32 are reserved for Google's internal RPC\n   framework.  We apologize for hoarding these numbers to ourselves, but\n   we were already using them long before we decided to release Protocol\n   Buffers.\n",
        ],
      }, {
        "path": [4, 17, 4, 0],
        "span": [706, 2, 710, 3],
        "leadingComments":
          " Is this method side-effect-free (or safe in HTTP parlance), or idempotent,\n or neither? HTTP based RPC implementation may choose GET verb for safe\n methods, and PUT verb for idempotent methods instead of the default POST.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 4, 0, 2, 1],
        "span": [708, 4, 24],
        "leadingComments": "",
        "trailingComments": " implies idempotent\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 4, 0, 2, 2],
        "span": [709, 4, 19],
        "leadingComments": "",
        "trailingComments": " idempotent, but may have side effects\n",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 2, 2],
        "span": [715, 2, 58],
        "leadingComments": " The parser stores options it doesn't recognize here. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 17, 5],
        "span": [718, 2, 25],
        "leadingComments": " Clients can define custom options in extensions of this message. See above.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18],
        "span": [728, 0, 748, 1],
        "leadingComments":
          " A message representing a option the parser does not recognize. This only\n appears in options protos created by the compiler::Parser class.\n DescriptorPool resolves these when building Descriptor objects. Therefore,\n options protos in descriptor objects (e.g. returned by Descriptor::options(),\n or produced by Descriptor::CopyTo()) will never have UninterpretedOptions\n in them.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 3, 0],
        "span": [734, 2, 737, 3],
        "leadingComments":
          ' The name of the uninterpreted option.  Each string represents a segment in\n a dot-separated name.  is_extension is true iff a segment represents an\n extension (denoted with parentheses in options specs in .proto files).\n E.g.,{ ["foo", false], ["bar.baz", true], ["qux", false] } represents\n "foo.(bar.baz).qux".\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 18, 2, 1],
        "span": [742, 2, 39],
        "leadingComments":
          " The value of the uninterpreted option, in whatever type the tokenizer\n identified it as during parsing. Exactly one of these should be set.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19],
        "span": [755, 0, 884, 1],
        "leadingComments":
          " Encapsulates information about the original source file from which a\n FileDescriptorProto was generated.\n",
        "trailingComments": "",
        "leadingDetachedComments": [
          " ===================================================================\n Optional source code info\n",
        ],
      }, {
        "path": [4, 19, 2, 0],
        "span": [799, 2, 33],
        "leadingComments":
          ' A Location identifies a piece of source code in a .proto file which\n corresponds to a particular definition.  This information is intended\n to be useful to IDEs, code indexers, documentation generators, and similar\n tools.\n\n For example, say we have a file like:\n   message Foo {\n     optional string foo = 1;\n   }\n Let\'s look at just the field definition:\n   optional string foo = 1;\n   ^       ^^     ^^  ^  ^^^\n   a       bc     de  f  ghi\n We have the following locations:\n   span   path               represents\n   [a,i)  [ 4, 0, 2, 0 ]     The whole field definition.\n   [a,b)  [ 4, 0, 2, 0, 4 ]  The label (optional).\n   [c,d)  [ 4, 0, 2, 0, 5 ]  The type (string).\n   [e,f)  [ 4, 0, 2, 0, 1 ]  The name (foo).\n   [g,h)  [ 4, 0, 2, 0, 3 ]  The number (1).\n\n Notes:\n - A location may refer to a repeated field itself (i.e. not to any\n   particular index within it).  This is used whenever a set of elements are\n   logically enclosed in a single code segment.  For example, an entire\n   extend block (possibly containing multiple extension definitions) will\n   have an outer location whose path refers to the "extensions" repeated\n   field without an index.\n - Multiple locations may have the same path.  This happens when a single\n   logical declaration is spread out across multiple places.  The most\n   obvious example is the "extend" block again -- there may be multiple\n   extend blocks in the same scope, each of which will have the same path.\n - A location\'s span is not always a subset of its parent\'s span.  For\n   example, the "extendee" of an extension declaration appears at the\n   beginning of the "extend" block and is shared by all extensions within\n   the block.\n - Just because a location\'s span is a subset of some other location\'s span\n   does not mean that it is a descendant.  For example, a "group" defines\n   both a type and a field in a single declaration.  Thus, the locations\n   corresponding to the type and field and their components will overlap.\n - Code which tries to interpret locations should probably be designed to\n   ignore those that it doesn\'t understand, as more types of locations could\n   be recorded in the future.\n',
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19, 3, 0, 2, 0],
        "span": [824, 4, 44],
        "leadingComments":
          " Identifies which part of the FileDescriptorProto was defined at this\n location.\n\n Each element is a field number or an index.  They form a path from\n the root FileDescriptorProto to the place where the definition.  For\n example, this path:\n   [ 4, 3, 2, 7, 1 ]\n refers to:\n   file.message_type(3)  // 4, 3\n       .field(7)         // 2, 7\n       .name()           // 1\n This is because FileDescriptorProto.message_type has field number 4:\n   repeated DescriptorProto message_type = 4;\n and DescriptorProto.field has field number 2:\n   repeated FieldDescriptorProto field = 2;\n and FieldDescriptorProto.name has field number 1:\n   optional string name = 1;\n\n Thus, the above path gives the location of a field name.  If we removed\n the last element:\n   [ 4, 3, 2, 7 ]\n this path refers to the whole field declaration (from the beginning\n of the label to the terminating semicolon).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19, 3, 0, 2, 1],
        "span": [831, 4, 44],
        "leadingComments":
          " Always has exactly three or four elements: start line, start column,\n end line (optional, otherwise assumed same as start line), end column.\n These are packed into a single field for efficiency.  Note that line\n and column numbers are zero-based -- typically you will want to add\n 1 to each before displaying to a user.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 19, 3, 0, 2, 2],
        "span": [880, 4, 41],
        "leadingComments":
          " If this SourceCodeInfo represents a complete declaration, these are any\n comments appearing before and after the declaration which appear to be\n attached to the declaration.\n\n A series of line comments appearing on consecutive lines, with no other\n tokens appearing on those lines, will be treated as a single comment.\n\n leading_detached_comments will keep paragraphs of comments that appear\n before (but not connected to) the current element. Each paragraph,\n separated by empty lines, will be one comment element in the repeated\n field.\n\n Only the comment content is provided; comment markers (e.g. //) are\n stripped out.  For block comments, leading whitespace and an asterisk\n will be stripped from the beginning of each line other than the first.\n Newlines are included in the output.\n\n Examples:\n\n   optional int32 foo = 1;  // Comment attached to foo.\n   // Comment attached to bar.\n   optional int32 bar = 2;\n\n   optional string baz = 3;\n   // Comment attached to baz.\n   // Another line attached to baz.\n\n   // Comment attached to qux.\n   //\n   // Another line attached to qux.\n   optional double qux = 4;\n\n   // Detached comment for corge. This is not leading or trailing comments\n   // to qux or corge because there are blank lines separating it from\n   // both.\n\n   // Detached comment for corge paragraph 2.\n\n   optional string corge = 5;\n   /* Block comment attached\n    * to corge.  Leading asterisks\n    * will be removed. */\n   /* Block comment attached to\n    * grault. */\n   optional int32 grault = 6;\n\n   // ignored detached comments.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20],
        "span": [889, 0, 910, 1],
        "leadingComments":
          " Describes the relationship between generated code and its original source\n file. A GeneratedCodeInfo message is associated with only one generated\n source file, but may contain references to different source .proto files.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 2, 0],
        "span": [892, 2, 37],
        "leadingComments":
          " An Annotation connects some span of text in generated code to an element\n of its generating .proto file.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 3, 0, 2, 0],
        "span": [896, 4, 44],
        "leadingComments":
          " Identifies the element in the original source .proto file. This field\n is formatted the same as SourceCodeInfo.Location.path.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 3, 0, 2, 1],
        "span": [899, 4, 36],
        "leadingComments": " Identifies the filesystem path to the original source .proto.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 3, 0, 2, 2],
        "span": [903, 4, 29],
        "leadingComments":
          " Identifies the starting offset in bytes in the generated code\n that relates to the identified object.\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }, {
        "path": [4, 20, 3, 0, 2, 3],
        "span": [908, 4, 27],
        "leadingComments":
          " Identifies the ending offset in bytes in the generated code that\n relates to the identified offset. The end offset should be one past\n the last relevant byte (so the length of the text = end - begin).\n",
        "trailingComments": "",
        "leadingDetachedComments": [],
      }],
    },
    "syntax": "",
  }),
  references: {
    ".google.protobuf.FileDescriptorSet": FileDescriptorSet,
    ".google.protobuf.FileDescriptorProto": FileDescriptorProto,
    ".google.protobuf.DescriptorProto": DescriptorProto,
    ".google.protobuf.DescriptorProto.ExtensionRange": DescriptorProto_ExtensionRange,
    ".google.protobuf.DescriptorProto.ReservedRange": DescriptorProto_ReservedRange,
    ".google.protobuf.ExtensionRangeOptions": ExtensionRangeOptions,
    ".google.protobuf.FieldDescriptorProto": FieldDescriptorProto,
    ".google.protobuf.FieldDescriptorProto.Type": FieldDescriptorProto_Type,
    ".google.protobuf.FieldDescriptorProto.Label": FieldDescriptorProto_Label,
    ".google.protobuf.OneofDescriptorProto": OneofDescriptorProto,
    ".google.protobuf.EnumDescriptorProto": EnumDescriptorProto,
    ".google.protobuf.EnumDescriptorProto.EnumReservedRange": EnumDescriptorProto_EnumReservedRange,
    ".google.protobuf.EnumValueDescriptorProto": EnumValueDescriptorProto,
    ".google.protobuf.ServiceDescriptorProto": ServiceDescriptorProto,
    ".google.protobuf.MethodDescriptorProto": MethodDescriptorProto,
    ".google.protobuf.FileOptions": FileOptions,
    ".google.protobuf.FileOptions.OptimizeMode": FileOptions_OptimizeMode,
    ".google.protobuf.MessageOptions": MessageOptions,
    ".google.protobuf.FieldOptions": FieldOptions,
    ".google.protobuf.FieldOptions.CType": FieldOptions_CType,
    ".google.protobuf.FieldOptions.JSType": FieldOptions_JSType,
    ".google.protobuf.OneofOptions": OneofOptions,
    ".google.protobuf.EnumOptions": EnumOptions,
    ".google.protobuf.EnumValueOptions": EnumValueOptions,
    ".google.protobuf.ServiceOptions": ServiceOptions,
    ".google.protobuf.MethodOptions": MethodOptions,
    ".google.protobuf.MethodOptions.IdempotencyLevel": MethodOptions_IdempotencyLevel,
    ".google.protobuf.UninterpretedOption": UninterpretedOption,
    ".google.protobuf.UninterpretedOption.NamePart": UninterpretedOption_NamePart,
    ".google.protobuf.SourceCodeInfo": SourceCodeInfo,
    ".google.protobuf.SourceCodeInfo.Location": SourceCodeInfo_Location,
    ".google.protobuf.GeneratedCodeInfo": GeneratedCodeInfo,
    ".google.protobuf.GeneratedCodeInfo.Annotation": GeneratedCodeInfo_Annotation,
  },
  dependencies: [],
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
