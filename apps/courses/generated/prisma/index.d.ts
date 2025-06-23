
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Stable
 * 
 */
export type Stable = $Result.DefaultSelection<Prisma.$StablePayload>
/**
 * Model Pilote
 * 
 */
export type Pilote = $Result.DefaultSelection<Prisma.$PilotePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Participation
 * 
 */
export type Participation = $Result.DefaultSelection<Prisma.$ParticipationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stables
 * const stables = await prisma.stable.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stables
   * const stables = await prisma.stable.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.stable`: Exposes CRUD operations for the **Stable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stables
    * const stables = await prisma.stable.findMany()
    * ```
    */
  get stable(): Prisma.StableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pilote`: Exposes CRUD operations for the **Pilote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pilotes
    * const pilotes = await prisma.pilote.findMany()
    * ```
    */
  get pilote(): Prisma.PiloteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participation`: Exposes CRUD operations for the **Participation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participations
    * const participations = await prisma.participation.findMany()
    * ```
    */
  get participation(): Prisma.ParticipationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Stable: 'Stable',
    Pilote: 'Pilote',
    Course: 'Course',
    Participation: 'Participation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "stable" | "pilote" | "course" | "participation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Stable: {
        payload: Prisma.$StablePayload<ExtArgs>
        fields: Prisma.StableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          findFirst: {
            args: Prisma.StableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          findMany: {
            args: Prisma.StableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>[]
          }
          create: {
            args: Prisma.StableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          createMany: {
            args: Prisma.StableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>[]
          }
          delete: {
            args: Prisma.StableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          update: {
            args: Prisma.StableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          deleteMany: {
            args: Prisma.StableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>[]
          }
          upsert: {
            args: Prisma.StableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StablePayload>
          }
          aggregate: {
            args: Prisma.StableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStable>
          }
          groupBy: {
            args: Prisma.StableGroupByArgs<ExtArgs>
            result: $Utils.Optional<StableGroupByOutputType>[]
          }
          count: {
            args: Prisma.StableCountArgs<ExtArgs>
            result: $Utils.Optional<StableCountAggregateOutputType> | number
          }
        }
      }
      Pilote: {
        payload: Prisma.$PilotePayload<ExtArgs>
        fields: Prisma.PiloteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PiloteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PiloteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          findFirst: {
            args: Prisma.PiloteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PiloteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          findMany: {
            args: Prisma.PiloteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>[]
          }
          create: {
            args: Prisma.PiloteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          createMany: {
            args: Prisma.PiloteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PiloteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>[]
          }
          delete: {
            args: Prisma.PiloteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          update: {
            args: Prisma.PiloteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          deleteMany: {
            args: Prisma.PiloteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PiloteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PiloteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>[]
          }
          upsert: {
            args: Prisma.PiloteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PilotePayload>
          }
          aggregate: {
            args: Prisma.PiloteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePilote>
          }
          groupBy: {
            args: Prisma.PiloteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PiloteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PiloteCountArgs<ExtArgs>
            result: $Utils.Optional<PiloteCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Participation: {
        payload: Prisma.$ParticipationPayload<ExtArgs>
        fields: Prisma.ParticipationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findFirst: {
            args: Prisma.ParticipationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          findMany: {
            args: Prisma.ParticipationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          create: {
            args: Prisma.ParticipationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          createMany: {
            args: Prisma.ParticipationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          delete: {
            args: Prisma.ParticipationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          update: {
            args: Prisma.ParticipationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          deleteMany: {
            args: Prisma.ParticipationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>[]
          }
          upsert: {
            args: Prisma.ParticipationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipationPayload>
          }
          aggregate: {
            args: Prisma.ParticipationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipation>
          }
          groupBy: {
            args: Prisma.ParticipationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipationCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    stable?: StableOmit
    pilote?: PiloteOmit
    course?: CourseOmit
    participation?: ParticipationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StableCountOutputType
   */

  export type StableCountOutputType = {
    pilote: number
  }

  export type StableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilote?: boolean | StableCountOutputTypeCountPiloteArgs
  }

  // Custom InputTypes
  /**
   * StableCountOutputType without action
   */
  export type StableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StableCountOutputType
     */
    select?: StableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StableCountOutputType without action
   */
  export type StableCountOutputTypeCountPiloteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiloteWhereInput
  }


  /**
   * Count Type PiloteCountOutputType
   */

  export type PiloteCountOutputType = {
    courses: number
  }

  export type PiloteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | PiloteCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * PiloteCountOutputType without action
   */
  export type PiloteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PiloteCountOutputType
     */
    select?: PiloteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PiloteCountOutputType without action
   */
  export type PiloteCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    participants: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | CourseCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Stable
   */

  export type AggregateStable = {
    _count: StableCountAggregateOutputType | null
    _avg: StableAvgAggregateOutputType | null
    _sum: StableSumAggregateOutputType | null
    _min: StableMinAggregateOutputType | null
    _max: StableMaxAggregateOutputType | null
  }

  export type StableAvgAggregateOutputType = {
    pilotes: number | null
    how_many_tournaments: number | null
    how_many_wins: number | null
    how_many_losses: number | null
  }

  export type StableSumAggregateOutputType = {
    pilotes: number | null
    how_many_tournaments: number | null
    how_many_wins: number | null
    how_many_losses: number | null
  }

  export type StableMinAggregateOutputType = {
    id: string | null
    image: string | null
    image_cover: string | null
    name: string | null
    location: string | null
    pilotes: number | null
    how_many_tournaments: number | null
    how_many_wins: number | null
    how_many_losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StableMaxAggregateOutputType = {
    id: string | null
    image: string | null
    image_cover: string | null
    name: string | null
    location: string | null
    pilotes: number | null
    how_many_tournaments: number | null
    how_many_wins: number | null
    how_many_losses: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StableCountAggregateOutputType = {
    id: number
    image: number
    image_cover: number
    name: number
    location: number
    pilotes: number
    how_many_tournaments: number
    how_many_wins: number
    how_many_losses: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StableAvgAggregateInputType = {
    pilotes?: true
    how_many_tournaments?: true
    how_many_wins?: true
    how_many_losses?: true
  }

  export type StableSumAggregateInputType = {
    pilotes?: true
    how_many_tournaments?: true
    how_many_wins?: true
    how_many_losses?: true
  }

  export type StableMinAggregateInputType = {
    id?: true
    image?: true
    image_cover?: true
    name?: true
    location?: true
    pilotes?: true
    how_many_tournaments?: true
    how_many_wins?: true
    how_many_losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StableMaxAggregateInputType = {
    id?: true
    image?: true
    image_cover?: true
    name?: true
    location?: true
    pilotes?: true
    how_many_tournaments?: true
    how_many_wins?: true
    how_many_losses?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StableCountAggregateInputType = {
    id?: true
    image?: true
    image_cover?: true
    name?: true
    location?: true
    pilotes?: true
    how_many_tournaments?: true
    how_many_wins?: true
    how_many_losses?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stable to aggregate.
     */
    where?: StableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stables to fetch.
     */
    orderBy?: StableOrderByWithRelationInput | StableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stables
    **/
    _count?: true | StableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StableMaxAggregateInputType
  }

  export type GetStableAggregateType<T extends StableAggregateArgs> = {
        [P in keyof T & keyof AggregateStable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStable[P]>
      : GetScalarType<T[P], AggregateStable[P]>
  }




  export type StableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StableWhereInput
    orderBy?: StableOrderByWithAggregationInput | StableOrderByWithAggregationInput[]
    by: StableScalarFieldEnum[] | StableScalarFieldEnum
    having?: StableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StableCountAggregateInputType | true
    _avg?: StableAvgAggregateInputType
    _sum?: StableSumAggregateInputType
    _min?: StableMinAggregateInputType
    _max?: StableMaxAggregateInputType
  }

  export type StableGroupByOutputType = {
    id: string
    image: string | null
    image_cover: string | null
    name: string
    location: string
    pilotes: number
    how_many_tournaments: number
    how_many_wins: number
    how_many_losses: number
    createdAt: Date
    updatedAt: Date
    _count: StableCountAggregateOutputType | null
    _avg: StableAvgAggregateOutputType | null
    _sum: StableSumAggregateOutputType | null
    _min: StableMinAggregateOutputType | null
    _max: StableMaxAggregateOutputType | null
  }

  type GetStableGroupByPayload<T extends StableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StableGroupByOutputType[P]>
            : GetScalarType<T[P], StableGroupByOutputType[P]>
        }
      >
    >


  export type StableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    image_cover?: boolean
    name?: boolean
    location?: boolean
    pilotes?: boolean
    how_many_tournaments?: boolean
    how_many_wins?: boolean
    how_many_losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilote?: boolean | Stable$piloteArgs<ExtArgs>
    _count?: boolean | StableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stable"]>

  export type StableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    image_cover?: boolean
    name?: boolean
    location?: boolean
    pilotes?: boolean
    how_many_tournaments?: boolean
    how_many_wins?: boolean
    how_many_losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stable"]>

  export type StableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    image_cover?: boolean
    name?: boolean
    location?: boolean
    pilotes?: boolean
    how_many_tournaments?: boolean
    how_many_wins?: boolean
    how_many_losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["stable"]>

  export type StableSelectScalar = {
    id?: boolean
    image?: boolean
    image_cover?: boolean
    name?: boolean
    location?: boolean
    pilotes?: boolean
    how_many_tournaments?: boolean
    how_many_wins?: boolean
    how_many_losses?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "image_cover" | "name" | "location" | "pilotes" | "how_many_tournaments" | "how_many_wins" | "how_many_losses" | "createdAt" | "updatedAt", ExtArgs["result"]["stable"]>
  export type StableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilote?: boolean | Stable$piloteArgs<ExtArgs>
    _count?: boolean | StableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stable"
    objects: {
      pilote: Prisma.$PilotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      image: string | null
      image_cover: string | null
      name: string
      location: string
      pilotes: number
      how_many_tournaments: number
      how_many_wins: number
      how_many_losses: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["stable"]>
    composites: {}
  }

  type StableGetPayload<S extends boolean | null | undefined | StableDefaultArgs> = $Result.GetResult<Prisma.$StablePayload, S>

  type StableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StableCountAggregateInputType | true
    }

  export interface StableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stable'], meta: { name: 'Stable' } }
    /**
     * Find zero or one Stable that matches the filter.
     * @param {StableFindUniqueArgs} args - Arguments to find a Stable
     * @example
     * // Get one Stable
     * const stable = await prisma.stable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StableFindUniqueArgs>(args: SelectSubset<T, StableFindUniqueArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StableFindUniqueOrThrowArgs} args - Arguments to find a Stable
     * @example
     * // Get one Stable
     * const stable = await prisma.stable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StableFindUniqueOrThrowArgs>(args: SelectSubset<T, StableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableFindFirstArgs} args - Arguments to find a Stable
     * @example
     * // Get one Stable
     * const stable = await prisma.stable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StableFindFirstArgs>(args?: SelectSubset<T, StableFindFirstArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableFindFirstOrThrowArgs} args - Arguments to find a Stable
     * @example
     * // Get one Stable
     * const stable = await prisma.stable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StableFindFirstOrThrowArgs>(args?: SelectSubset<T, StableFindFirstOrThrowArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stables
     * const stables = await prisma.stable.findMany()
     * 
     * // Get first 10 Stables
     * const stables = await prisma.stable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stableWithIdOnly = await prisma.stable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StableFindManyArgs>(args?: SelectSubset<T, StableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stable.
     * @param {StableCreateArgs} args - Arguments to create a Stable.
     * @example
     * // Create one Stable
     * const Stable = await prisma.stable.create({
     *   data: {
     *     // ... data to create a Stable
     *   }
     * })
     * 
     */
    create<T extends StableCreateArgs>(args: SelectSubset<T, StableCreateArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stables.
     * @param {StableCreateManyArgs} args - Arguments to create many Stables.
     * @example
     * // Create many Stables
     * const stable = await prisma.stable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StableCreateManyArgs>(args?: SelectSubset<T, StableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stables and returns the data saved in the database.
     * @param {StableCreateManyAndReturnArgs} args - Arguments to create many Stables.
     * @example
     * // Create many Stables
     * const stable = await prisma.stable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stables and only return the `id`
     * const stableWithIdOnly = await prisma.stable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StableCreateManyAndReturnArgs>(args?: SelectSubset<T, StableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stable.
     * @param {StableDeleteArgs} args - Arguments to delete one Stable.
     * @example
     * // Delete one Stable
     * const Stable = await prisma.stable.delete({
     *   where: {
     *     // ... filter to delete one Stable
     *   }
     * })
     * 
     */
    delete<T extends StableDeleteArgs>(args: SelectSubset<T, StableDeleteArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stable.
     * @param {StableUpdateArgs} args - Arguments to update one Stable.
     * @example
     * // Update one Stable
     * const stable = await prisma.stable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StableUpdateArgs>(args: SelectSubset<T, StableUpdateArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stables.
     * @param {StableDeleteManyArgs} args - Arguments to filter Stables to delete.
     * @example
     * // Delete a few Stables
     * const { count } = await prisma.stable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StableDeleteManyArgs>(args?: SelectSubset<T, StableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stables
     * const stable = await prisma.stable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StableUpdateManyArgs>(args: SelectSubset<T, StableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stables and returns the data updated in the database.
     * @param {StableUpdateManyAndReturnArgs} args - Arguments to update many Stables.
     * @example
     * // Update many Stables
     * const stable = await prisma.stable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stables and only return the `id`
     * const stableWithIdOnly = await prisma.stable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StableUpdateManyAndReturnArgs>(args: SelectSubset<T, StableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stable.
     * @param {StableUpsertArgs} args - Arguments to update or create a Stable.
     * @example
     * // Update or create a Stable
     * const stable = await prisma.stable.upsert({
     *   create: {
     *     // ... data to create a Stable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stable we want to update
     *   }
     * })
     */
    upsert<T extends StableUpsertArgs>(args: SelectSubset<T, StableUpsertArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableCountArgs} args - Arguments to filter Stables to count.
     * @example
     * // Count the number of Stables
     * const count = await prisma.stable.count({
     *   where: {
     *     // ... the filter for the Stables we want to count
     *   }
     * })
    **/
    count<T extends StableCountArgs>(
      args?: Subset<T, StableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StableAggregateArgs>(args: Subset<T, StableAggregateArgs>): Prisma.PrismaPromise<GetStableAggregateType<T>>

    /**
     * Group by Stable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StableGroupByArgs['orderBy'] }
        : { orderBy?: StableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stable model
   */
  readonly fields: StableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pilote<T extends Stable$piloteArgs<ExtArgs> = {}>(args?: Subset<T, Stable$piloteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stable model
   */
  interface StableFieldRefs {
    readonly id: FieldRef<"Stable", 'String'>
    readonly image: FieldRef<"Stable", 'String'>
    readonly image_cover: FieldRef<"Stable", 'String'>
    readonly name: FieldRef<"Stable", 'String'>
    readonly location: FieldRef<"Stable", 'String'>
    readonly pilotes: FieldRef<"Stable", 'Int'>
    readonly how_many_tournaments: FieldRef<"Stable", 'Int'>
    readonly how_many_wins: FieldRef<"Stable", 'Int'>
    readonly how_many_losses: FieldRef<"Stable", 'Int'>
    readonly createdAt: FieldRef<"Stable", 'DateTime'>
    readonly updatedAt: FieldRef<"Stable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stable findUnique
   */
  export type StableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter, which Stable to fetch.
     */
    where: StableWhereUniqueInput
  }

  /**
   * Stable findUniqueOrThrow
   */
  export type StableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter, which Stable to fetch.
     */
    where: StableWhereUniqueInput
  }

  /**
   * Stable findFirst
   */
  export type StableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter, which Stable to fetch.
     */
    where?: StableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stables to fetch.
     */
    orderBy?: StableOrderByWithRelationInput | StableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stables.
     */
    cursor?: StableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stables.
     */
    distinct?: StableScalarFieldEnum | StableScalarFieldEnum[]
  }

  /**
   * Stable findFirstOrThrow
   */
  export type StableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter, which Stable to fetch.
     */
    where?: StableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stables to fetch.
     */
    orderBy?: StableOrderByWithRelationInput | StableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stables.
     */
    cursor?: StableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stables.
     */
    distinct?: StableScalarFieldEnum | StableScalarFieldEnum[]
  }

  /**
   * Stable findMany
   */
  export type StableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter, which Stables to fetch.
     */
    where?: StableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stables to fetch.
     */
    orderBy?: StableOrderByWithRelationInput | StableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stables.
     */
    cursor?: StableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stables.
     */
    skip?: number
    distinct?: StableScalarFieldEnum | StableScalarFieldEnum[]
  }

  /**
   * Stable create
   */
  export type StableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * The data needed to create a Stable.
     */
    data: XOR<StableCreateInput, StableUncheckedCreateInput>
  }

  /**
   * Stable createMany
   */
  export type StableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stables.
     */
    data: StableCreateManyInput | StableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stable createManyAndReturn
   */
  export type StableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * The data used to create many Stables.
     */
    data: StableCreateManyInput | StableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stable update
   */
  export type StableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * The data needed to update a Stable.
     */
    data: XOR<StableUpdateInput, StableUncheckedUpdateInput>
    /**
     * Choose, which Stable to update.
     */
    where: StableWhereUniqueInput
  }

  /**
   * Stable updateMany
   */
  export type StableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stables.
     */
    data: XOR<StableUpdateManyMutationInput, StableUncheckedUpdateManyInput>
    /**
     * Filter which Stables to update
     */
    where?: StableWhereInput
    /**
     * Limit how many Stables to update.
     */
    limit?: number
  }

  /**
   * Stable updateManyAndReturn
   */
  export type StableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * The data used to update Stables.
     */
    data: XOR<StableUpdateManyMutationInput, StableUncheckedUpdateManyInput>
    /**
     * Filter which Stables to update
     */
    where?: StableWhereInput
    /**
     * Limit how many Stables to update.
     */
    limit?: number
  }

  /**
   * Stable upsert
   */
  export type StableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * The filter to search for the Stable to update in case it exists.
     */
    where: StableWhereUniqueInput
    /**
     * In case the Stable found by the `where` argument doesn't exist, create a new Stable with this data.
     */
    create: XOR<StableCreateInput, StableUncheckedCreateInput>
    /**
     * In case the Stable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StableUpdateInput, StableUncheckedUpdateInput>
  }

  /**
   * Stable delete
   */
  export type StableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
    /**
     * Filter which Stable to delete.
     */
    where: StableWhereUniqueInput
  }

  /**
   * Stable deleteMany
   */
  export type StableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stables to delete
     */
    where?: StableWhereInput
    /**
     * Limit how many Stables to delete.
     */
    limit?: number
  }

  /**
   * Stable.pilote
   */
  export type Stable$piloteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    where?: PiloteWhereInput
    orderBy?: PiloteOrderByWithRelationInput | PiloteOrderByWithRelationInput[]
    cursor?: PiloteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PiloteScalarFieldEnum | PiloteScalarFieldEnum[]
  }

  /**
   * Stable without action
   */
  export type StableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stable
     */
    select?: StableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stable
     */
    omit?: StableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StableInclude<ExtArgs> | null
  }


  /**
   * Model Pilote
   */

  export type AggregatePilote = {
    _count: PiloteCountAggregateOutputType | null
    _avg: PiloteAvgAggregateOutputType | null
    _sum: PiloteSumAggregateOutputType | null
    _min: PiloteMinAggregateOutputType | null
    _max: PiloteMaxAggregateOutputType | null
  }

  export type PiloteAvgAggregateOutputType = {
    age: number | null
    best_chrono_time: number | null
    pilote_number: number | null
    points: number | null
  }

  export type PiloteSumAggregateOutputType = {
    age: number | null
    best_chrono_time: number | null
    pilote_number: number | null
    points: number | null
  }

  export type PiloteMinAggregateOutputType = {
    id: string | null
    name: string | null
    stableId: string | null
    age: number | null
    gender: string | null
    best_chrono_time: number | null
    pilote_number: number | null
    points: number | null
  }

  export type PiloteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stableId: string | null
    age: number | null
    gender: string | null
    best_chrono_time: number | null
    pilote_number: number | null
    points: number | null
  }

  export type PiloteCountAggregateOutputType = {
    id: number
    name: number
    stableId: number
    age: number
    gender: number
    best_chrono_time: number
    pilote_number: number
    points: number
    _all: number
  }


  export type PiloteAvgAggregateInputType = {
    age?: true
    best_chrono_time?: true
    pilote_number?: true
    points?: true
  }

  export type PiloteSumAggregateInputType = {
    age?: true
    best_chrono_time?: true
    pilote_number?: true
    points?: true
  }

  export type PiloteMinAggregateInputType = {
    id?: true
    name?: true
    stableId?: true
    age?: true
    gender?: true
    best_chrono_time?: true
    pilote_number?: true
    points?: true
  }

  export type PiloteMaxAggregateInputType = {
    id?: true
    name?: true
    stableId?: true
    age?: true
    gender?: true
    best_chrono_time?: true
    pilote_number?: true
    points?: true
  }

  export type PiloteCountAggregateInputType = {
    id?: true
    name?: true
    stableId?: true
    age?: true
    gender?: true
    best_chrono_time?: true
    pilote_number?: true
    points?: true
    _all?: true
  }

  export type PiloteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pilote to aggregate.
     */
    where?: PiloteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilotes to fetch.
     */
    orderBy?: PiloteOrderByWithRelationInput | PiloteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PiloteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pilotes
    **/
    _count?: true | PiloteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PiloteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PiloteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PiloteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PiloteMaxAggregateInputType
  }

  export type GetPiloteAggregateType<T extends PiloteAggregateArgs> = {
        [P in keyof T & keyof AggregatePilote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePilote[P]>
      : GetScalarType<T[P], AggregatePilote[P]>
  }




  export type PiloteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PiloteWhereInput
    orderBy?: PiloteOrderByWithAggregationInput | PiloteOrderByWithAggregationInput[]
    by: PiloteScalarFieldEnum[] | PiloteScalarFieldEnum
    having?: PiloteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PiloteCountAggregateInputType | true
    _avg?: PiloteAvgAggregateInputType
    _sum?: PiloteSumAggregateInputType
    _min?: PiloteMinAggregateInputType
    _max?: PiloteMaxAggregateInputType
  }

  export type PiloteGroupByOutputType = {
    id: string
    name: string
    stableId: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points: number
    _count: PiloteCountAggregateOutputType | null
    _avg: PiloteAvgAggregateOutputType | null
    _sum: PiloteSumAggregateOutputType | null
    _min: PiloteMinAggregateOutputType | null
    _max: PiloteMaxAggregateOutputType | null
  }

  type GetPiloteGroupByPayload<T extends PiloteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PiloteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PiloteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PiloteGroupByOutputType[P]>
            : GetScalarType<T[P], PiloteGroupByOutputType[P]>
        }
      >
    >


  export type PiloteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stableId?: boolean
    age?: boolean
    gender?: boolean
    best_chrono_time?: boolean
    pilote_number?: boolean
    points?: boolean
    courses?: boolean | Pilote$coursesArgs<ExtArgs>
    Stable?: boolean | StableDefaultArgs<ExtArgs>
    _count?: boolean | PiloteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pilote"]>

  export type PiloteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stableId?: boolean
    age?: boolean
    gender?: boolean
    best_chrono_time?: boolean
    pilote_number?: boolean
    points?: boolean
    Stable?: boolean | StableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pilote"]>

  export type PiloteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stableId?: boolean
    age?: boolean
    gender?: boolean
    best_chrono_time?: boolean
    pilote_number?: boolean
    points?: boolean
    Stable?: boolean | StableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pilote"]>

  export type PiloteSelectScalar = {
    id?: boolean
    name?: boolean
    stableId?: boolean
    age?: boolean
    gender?: boolean
    best_chrono_time?: boolean
    pilote_number?: boolean
    points?: boolean
  }

  export type PiloteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stableId" | "age" | "gender" | "best_chrono_time" | "pilote_number" | "points", ExtArgs["result"]["pilote"]>
  export type PiloteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Pilote$coursesArgs<ExtArgs>
    Stable?: boolean | StableDefaultArgs<ExtArgs>
    _count?: boolean | PiloteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PiloteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stable?: boolean | StableDefaultArgs<ExtArgs>
  }
  export type PiloteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stable?: boolean | StableDefaultArgs<ExtArgs>
  }

  export type $PilotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pilote"
    objects: {
      courses: Prisma.$ParticipationPayload<ExtArgs>[]
      Stable: Prisma.$StablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stableId: string
      age: number
      gender: string
      best_chrono_time: number
      pilote_number: number
      points: number
    }, ExtArgs["result"]["pilote"]>
    composites: {}
  }

  type PiloteGetPayload<S extends boolean | null | undefined | PiloteDefaultArgs> = $Result.GetResult<Prisma.$PilotePayload, S>

  type PiloteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PiloteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PiloteCountAggregateInputType | true
    }

  export interface PiloteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pilote'], meta: { name: 'Pilote' } }
    /**
     * Find zero or one Pilote that matches the filter.
     * @param {PiloteFindUniqueArgs} args - Arguments to find a Pilote
     * @example
     * // Get one Pilote
     * const pilote = await prisma.pilote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PiloteFindUniqueArgs>(args: SelectSubset<T, PiloteFindUniqueArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pilote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PiloteFindUniqueOrThrowArgs} args - Arguments to find a Pilote
     * @example
     * // Get one Pilote
     * const pilote = await prisma.pilote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PiloteFindUniqueOrThrowArgs>(args: SelectSubset<T, PiloteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pilote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteFindFirstArgs} args - Arguments to find a Pilote
     * @example
     * // Get one Pilote
     * const pilote = await prisma.pilote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PiloteFindFirstArgs>(args?: SelectSubset<T, PiloteFindFirstArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pilote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteFindFirstOrThrowArgs} args - Arguments to find a Pilote
     * @example
     * // Get one Pilote
     * const pilote = await prisma.pilote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PiloteFindFirstOrThrowArgs>(args?: SelectSubset<T, PiloteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pilotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pilotes
     * const pilotes = await prisma.pilote.findMany()
     * 
     * // Get first 10 Pilotes
     * const pilotes = await prisma.pilote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const piloteWithIdOnly = await prisma.pilote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PiloteFindManyArgs>(args?: SelectSubset<T, PiloteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pilote.
     * @param {PiloteCreateArgs} args - Arguments to create a Pilote.
     * @example
     * // Create one Pilote
     * const Pilote = await prisma.pilote.create({
     *   data: {
     *     // ... data to create a Pilote
     *   }
     * })
     * 
     */
    create<T extends PiloteCreateArgs>(args: SelectSubset<T, PiloteCreateArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pilotes.
     * @param {PiloteCreateManyArgs} args - Arguments to create many Pilotes.
     * @example
     * // Create many Pilotes
     * const pilote = await prisma.pilote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PiloteCreateManyArgs>(args?: SelectSubset<T, PiloteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pilotes and returns the data saved in the database.
     * @param {PiloteCreateManyAndReturnArgs} args - Arguments to create many Pilotes.
     * @example
     * // Create many Pilotes
     * const pilote = await prisma.pilote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pilotes and only return the `id`
     * const piloteWithIdOnly = await prisma.pilote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PiloteCreateManyAndReturnArgs>(args?: SelectSubset<T, PiloteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pilote.
     * @param {PiloteDeleteArgs} args - Arguments to delete one Pilote.
     * @example
     * // Delete one Pilote
     * const Pilote = await prisma.pilote.delete({
     *   where: {
     *     // ... filter to delete one Pilote
     *   }
     * })
     * 
     */
    delete<T extends PiloteDeleteArgs>(args: SelectSubset<T, PiloteDeleteArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pilote.
     * @param {PiloteUpdateArgs} args - Arguments to update one Pilote.
     * @example
     * // Update one Pilote
     * const pilote = await prisma.pilote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PiloteUpdateArgs>(args: SelectSubset<T, PiloteUpdateArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pilotes.
     * @param {PiloteDeleteManyArgs} args - Arguments to filter Pilotes to delete.
     * @example
     * // Delete a few Pilotes
     * const { count } = await prisma.pilote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PiloteDeleteManyArgs>(args?: SelectSubset<T, PiloteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pilotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pilotes
     * const pilote = await prisma.pilote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PiloteUpdateManyArgs>(args: SelectSubset<T, PiloteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pilotes and returns the data updated in the database.
     * @param {PiloteUpdateManyAndReturnArgs} args - Arguments to update many Pilotes.
     * @example
     * // Update many Pilotes
     * const pilote = await prisma.pilote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pilotes and only return the `id`
     * const piloteWithIdOnly = await prisma.pilote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PiloteUpdateManyAndReturnArgs>(args: SelectSubset<T, PiloteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pilote.
     * @param {PiloteUpsertArgs} args - Arguments to update or create a Pilote.
     * @example
     * // Update or create a Pilote
     * const pilote = await prisma.pilote.upsert({
     *   create: {
     *     // ... data to create a Pilote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pilote we want to update
     *   }
     * })
     */
    upsert<T extends PiloteUpsertArgs>(args: SelectSubset<T, PiloteUpsertArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pilotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteCountArgs} args - Arguments to filter Pilotes to count.
     * @example
     * // Count the number of Pilotes
     * const count = await prisma.pilote.count({
     *   where: {
     *     // ... the filter for the Pilotes we want to count
     *   }
     * })
    **/
    count<T extends PiloteCountArgs>(
      args?: Subset<T, PiloteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PiloteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pilote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiloteAggregateArgs>(args: Subset<T, PiloteAggregateArgs>): Prisma.PrismaPromise<GetPiloteAggregateType<T>>

    /**
     * Group by Pilote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiloteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PiloteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PiloteGroupByArgs['orderBy'] }
        : { orderBy?: PiloteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PiloteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiloteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pilote model
   */
  readonly fields: PiloteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pilote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PiloteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Pilote$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Pilote$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Stable<T extends StableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StableDefaultArgs<ExtArgs>>): Prisma__StableClient<$Result.GetResult<Prisma.$StablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pilote model
   */
  interface PiloteFieldRefs {
    readonly id: FieldRef<"Pilote", 'String'>
    readonly name: FieldRef<"Pilote", 'String'>
    readonly stableId: FieldRef<"Pilote", 'String'>
    readonly age: FieldRef<"Pilote", 'Int'>
    readonly gender: FieldRef<"Pilote", 'String'>
    readonly best_chrono_time: FieldRef<"Pilote", 'Int'>
    readonly pilote_number: FieldRef<"Pilote", 'Int'>
    readonly points: FieldRef<"Pilote", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pilote findUnique
   */
  export type PiloteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter, which Pilote to fetch.
     */
    where: PiloteWhereUniqueInput
  }

  /**
   * Pilote findUniqueOrThrow
   */
  export type PiloteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter, which Pilote to fetch.
     */
    where: PiloteWhereUniqueInput
  }

  /**
   * Pilote findFirst
   */
  export type PiloteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter, which Pilote to fetch.
     */
    where?: PiloteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilotes to fetch.
     */
    orderBy?: PiloteOrderByWithRelationInput | PiloteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pilotes.
     */
    cursor?: PiloteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pilotes.
     */
    distinct?: PiloteScalarFieldEnum | PiloteScalarFieldEnum[]
  }

  /**
   * Pilote findFirstOrThrow
   */
  export type PiloteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter, which Pilote to fetch.
     */
    where?: PiloteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilotes to fetch.
     */
    orderBy?: PiloteOrderByWithRelationInput | PiloteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pilotes.
     */
    cursor?: PiloteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pilotes.
     */
    distinct?: PiloteScalarFieldEnum | PiloteScalarFieldEnum[]
  }

  /**
   * Pilote findMany
   */
  export type PiloteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter, which Pilotes to fetch.
     */
    where?: PiloteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pilotes to fetch.
     */
    orderBy?: PiloteOrderByWithRelationInput | PiloteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pilotes.
     */
    cursor?: PiloteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pilotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pilotes.
     */
    skip?: number
    distinct?: PiloteScalarFieldEnum | PiloteScalarFieldEnum[]
  }

  /**
   * Pilote create
   */
  export type PiloteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * The data needed to create a Pilote.
     */
    data: XOR<PiloteCreateInput, PiloteUncheckedCreateInput>
  }

  /**
   * Pilote createMany
   */
  export type PiloteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pilotes.
     */
    data: PiloteCreateManyInput | PiloteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pilote createManyAndReturn
   */
  export type PiloteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * The data used to create many Pilotes.
     */
    data: PiloteCreateManyInput | PiloteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pilote update
   */
  export type PiloteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * The data needed to update a Pilote.
     */
    data: XOR<PiloteUpdateInput, PiloteUncheckedUpdateInput>
    /**
     * Choose, which Pilote to update.
     */
    where: PiloteWhereUniqueInput
  }

  /**
   * Pilote updateMany
   */
  export type PiloteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pilotes.
     */
    data: XOR<PiloteUpdateManyMutationInput, PiloteUncheckedUpdateManyInput>
    /**
     * Filter which Pilotes to update
     */
    where?: PiloteWhereInput
    /**
     * Limit how many Pilotes to update.
     */
    limit?: number
  }

  /**
   * Pilote updateManyAndReturn
   */
  export type PiloteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * The data used to update Pilotes.
     */
    data: XOR<PiloteUpdateManyMutationInput, PiloteUncheckedUpdateManyInput>
    /**
     * Filter which Pilotes to update
     */
    where?: PiloteWhereInput
    /**
     * Limit how many Pilotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pilote upsert
   */
  export type PiloteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * The filter to search for the Pilote to update in case it exists.
     */
    where: PiloteWhereUniqueInput
    /**
     * In case the Pilote found by the `where` argument doesn't exist, create a new Pilote with this data.
     */
    create: XOR<PiloteCreateInput, PiloteUncheckedCreateInput>
    /**
     * In case the Pilote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PiloteUpdateInput, PiloteUncheckedUpdateInput>
  }

  /**
   * Pilote delete
   */
  export type PiloteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
    /**
     * Filter which Pilote to delete.
     */
    where: PiloteWhereUniqueInput
  }

  /**
   * Pilote deleteMany
   */
  export type PiloteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pilotes to delete
     */
    where?: PiloteWhereInput
    /**
     * Limit how many Pilotes to delete.
     */
    limit?: number
  }

  /**
   * Pilote.courses
   */
  export type Pilote$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Pilote without action
   */
  export type PiloteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pilote
     */
    select?: PiloteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pilote
     */
    omit?: PiloteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PiloteInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    nb_tours: number | null
  }

  export type CourseSumAggregateOutputType = {
    nb_tours: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    date: Date | null
    nb_tours: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    date: Date | null
    nb_tours: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    image: number
    date: number
    nb_tours: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    nb_tours?: true
  }

  export type CourseSumAggregateInputType = {
    nb_tours?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    date?: true
    nb_tours?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    date?: true
    nb_tours?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    date?: true
    nb_tours?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    image: string | null
    date: Date
    nb_tours: number
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    date?: boolean
    nb_tours?: boolean
    participants?: boolean | Course$participantsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    date?: boolean
    nb_tours?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    date?: boolean
    nb_tours?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    date?: boolean
    nb_tours?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "date" | "nb_tours", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | Course$participantsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      participants: Prisma.$ParticipationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string | null
      date: Date
      nb_tours: number
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participants<T extends Course$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Course$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly image: FieldRef<"Course", 'String'>
    readonly date: FieldRef<"Course", 'DateTime'>
    readonly nb_tours: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.participants
   */
  export type Course$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    cursor?: ParticipationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Participation
   */

  export type AggregateParticipation = {
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  export type ParticipationAvgAggregateOutputType = {
    chrono: number | null
    position: number | null
    points: number | null
  }

  export type ParticipationSumAggregateOutputType = {
    chrono: number | null
    position: number | null
    points: number | null
  }

  export type ParticipationMinAggregateOutputType = {
    id: string | null
    piloteId: string | null
    courseId: string | null
    chrono: number | null
    position: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipationMaxAggregateOutputType = {
    id: string | null
    piloteId: string | null
    courseId: string | null
    chrono: number | null
    position: number | null
    points: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParticipationCountAggregateOutputType = {
    id: number
    piloteId: number
    courseId: number
    chrono: number
    position: number
    points: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParticipationAvgAggregateInputType = {
    chrono?: true
    position?: true
    points?: true
  }

  export type ParticipationSumAggregateInputType = {
    chrono?: true
    position?: true
    points?: true
  }

  export type ParticipationMinAggregateInputType = {
    id?: true
    piloteId?: true
    courseId?: true
    chrono?: true
    position?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipationMaxAggregateInputType = {
    id?: true
    piloteId?: true
    courseId?: true
    chrono?: true
    position?: true
    points?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParticipationCountAggregateInputType = {
    id?: true
    piloteId?: true
    courseId?: true
    chrono?: true
    position?: true
    points?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParticipationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participation to aggregate.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participations
    **/
    _count?: true | ParticipationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipationMaxAggregateInputType
  }

  export type GetParticipationAggregateType<T extends ParticipationAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipation[P]>
      : GetScalarType<T[P], AggregateParticipation[P]>
  }




  export type ParticipationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipationWhereInput
    orderBy?: ParticipationOrderByWithAggregationInput | ParticipationOrderByWithAggregationInput[]
    by: ParticipationScalarFieldEnum[] | ParticipationScalarFieldEnum
    having?: ParticipationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipationCountAggregateInputType | true
    _avg?: ParticipationAvgAggregateInputType
    _sum?: ParticipationSumAggregateInputType
    _min?: ParticipationMinAggregateInputType
    _max?: ParticipationMaxAggregateInputType
  }

  export type ParticipationGroupByOutputType = {
    id: string
    piloteId: string
    courseId: string
    chrono: number | null
    position: number | null
    points: number
    createdAt: Date
    updatedAt: Date
    _count: ParticipationCountAggregateOutputType | null
    _avg: ParticipationAvgAggregateOutputType | null
    _sum: ParticipationSumAggregateOutputType | null
    _min: ParticipationMinAggregateOutputType | null
    _max: ParticipationMaxAggregateOutputType | null
  }

  type GetParticipationGroupByPayload<T extends ParticipationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipationGroupByOutputType[P]>
        }
      >
    >


  export type ParticipationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piloteId?: boolean
    courseId?: boolean
    chrono?: boolean
    position?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piloteId?: boolean
    courseId?: boolean
    chrono?: boolean
    position?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    piloteId?: boolean
    courseId?: boolean
    chrono?: boolean
    position?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participation"]>

  export type ParticipationSelectScalar = {
    id?: boolean
    piloteId?: boolean
    courseId?: boolean
    chrono?: boolean
    position?: boolean
    points?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParticipationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "piloteId" | "courseId" | "chrono" | "position" | "points" | "createdAt" | "updatedAt", ExtArgs["result"]["participation"]>
  export type ParticipationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ParticipationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pilote?: boolean | PiloteDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ParticipationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participation"
    objects: {
      pilote: Prisma.$PilotePayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      piloteId: string
      courseId: string
      chrono: number | null
      position: number | null
      points: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["participation"]>
    composites: {}
  }

  type ParticipationGetPayload<S extends boolean | null | undefined | ParticipationDefaultArgs> = $Result.GetResult<Prisma.$ParticipationPayload, S>

  type ParticipationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipationCountAggregateInputType | true
    }

  export interface ParticipationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participation'], meta: { name: 'Participation' } }
    /**
     * Find zero or one Participation that matches the filter.
     * @param {ParticipationFindUniqueArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipationFindUniqueArgs>(args: SelectSubset<T, ParticipationFindUniqueArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipationFindUniqueOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipationFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipationFindFirstArgs>(args?: SelectSubset<T, ParticipationFindFirstArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindFirstOrThrowArgs} args - Arguments to find a Participation
     * @example
     * // Get one Participation
     * const participation = await prisma.participation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipationFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participations
     * const participations = await prisma.participation.findMany()
     * 
     * // Get first 10 Participations
     * const participations = await prisma.participation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participationWithIdOnly = await prisma.participation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipationFindManyArgs>(args?: SelectSubset<T, ParticipationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participation.
     * @param {ParticipationCreateArgs} args - Arguments to create a Participation.
     * @example
     * // Create one Participation
     * const Participation = await prisma.participation.create({
     *   data: {
     *     // ... data to create a Participation
     *   }
     * })
     * 
     */
    create<T extends ParticipationCreateArgs>(args: SelectSubset<T, ParticipationCreateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participations.
     * @param {ParticipationCreateManyArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipationCreateManyArgs>(args?: SelectSubset<T, ParticipationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participations and returns the data saved in the database.
     * @param {ParticipationCreateManyAndReturnArgs} args - Arguments to create many Participations.
     * @example
     * // Create many Participations
     * const participation = await prisma.participation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipationCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participation.
     * @param {ParticipationDeleteArgs} args - Arguments to delete one Participation.
     * @example
     * // Delete one Participation
     * const Participation = await prisma.participation.delete({
     *   where: {
     *     // ... filter to delete one Participation
     *   }
     * })
     * 
     */
    delete<T extends ParticipationDeleteArgs>(args: SelectSubset<T, ParticipationDeleteArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participation.
     * @param {ParticipationUpdateArgs} args - Arguments to update one Participation.
     * @example
     * // Update one Participation
     * const participation = await prisma.participation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipationUpdateArgs>(args: SelectSubset<T, ParticipationUpdateArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participations.
     * @param {ParticipationDeleteManyArgs} args - Arguments to filter Participations to delete.
     * @example
     * // Delete a few Participations
     * const { count } = await prisma.participation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipationDeleteManyArgs>(args?: SelectSubset<T, ParticipationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipationUpdateManyArgs>(args: SelectSubset<T, ParticipationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participations and returns the data updated in the database.
     * @param {ParticipationUpdateManyAndReturnArgs} args - Arguments to update many Participations.
     * @example
     * // Update many Participations
     * const participation = await prisma.participation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participations and only return the `id`
     * const participationWithIdOnly = await prisma.participation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParticipationUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participation.
     * @param {ParticipationUpsertArgs} args - Arguments to update or create a Participation.
     * @example
     * // Update or create a Participation
     * const participation = await prisma.participation.upsert({
     *   create: {
     *     // ... data to create a Participation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participation we want to update
     *   }
     * })
     */
    upsert<T extends ParticipationUpsertArgs>(args: SelectSubset<T, ParticipationUpsertArgs<ExtArgs>>): Prisma__ParticipationClient<$Result.GetResult<Prisma.$ParticipationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationCountArgs} args - Arguments to filter Participations to count.
     * @example
     * // Count the number of Participations
     * const count = await prisma.participation.count({
     *   where: {
     *     // ... the filter for the Participations we want to count
     *   }
     * })
    **/
    count<T extends ParticipationCountArgs>(
      args?: Subset<T, ParticipationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParticipationAggregateArgs>(args: Subset<T, ParticipationAggregateArgs>): Prisma.PrismaPromise<GetParticipationAggregateType<T>>

    /**
     * Group by Participation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParticipationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipationGroupByArgs['orderBy'] }
        : { orderBy?: ParticipationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParticipationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participation model
   */
  readonly fields: ParticipationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pilote<T extends PiloteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PiloteDefaultArgs<ExtArgs>>): Prisma__PiloteClient<$Result.GetResult<Prisma.$PilotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Participation model
   */
  interface ParticipationFieldRefs {
    readonly id: FieldRef<"Participation", 'String'>
    readonly piloteId: FieldRef<"Participation", 'String'>
    readonly courseId: FieldRef<"Participation", 'String'>
    readonly chrono: FieldRef<"Participation", 'Int'>
    readonly position: FieldRef<"Participation", 'Int'>
    readonly points: FieldRef<"Participation", 'Int'>
    readonly createdAt: FieldRef<"Participation", 'DateTime'>
    readonly updatedAt: FieldRef<"Participation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participation findUnique
   */
  export type ParticipationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findUniqueOrThrow
   */
  export type ParticipationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation findFirst
   */
  export type ParticipationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findFirstOrThrow
   */
  export type ParticipationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participation to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participations.
     */
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation findMany
   */
  export type ParticipationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter, which Participations to fetch.
     */
    where?: ParticipationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participations to fetch.
     */
    orderBy?: ParticipationOrderByWithRelationInput | ParticipationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participations.
     */
    cursor?: ParticipationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participations.
     */
    skip?: number
    distinct?: ParticipationScalarFieldEnum | ParticipationScalarFieldEnum[]
  }

  /**
   * Participation create
   */
  export type ParticipationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to create a Participation.
     */
    data: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
  }

  /**
   * Participation createMany
   */
  export type ParticipationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participation createManyAndReturn
   */
  export type ParticipationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to create many Participations.
     */
    data: ParticipationCreateManyInput | ParticipationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation update
   */
  export type ParticipationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The data needed to update a Participation.
     */
    data: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
    /**
     * Choose, which Participation to update.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation updateMany
   */
  export type ParticipationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
  }

  /**
   * Participation updateManyAndReturn
   */
  export type ParticipationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * The data used to update Participations.
     */
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyInput>
    /**
     * Filter which Participations to update
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participation upsert
   */
  export type ParticipationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * The filter to search for the Participation to update in case it exists.
     */
    where: ParticipationWhereUniqueInput
    /**
     * In case the Participation found by the `where` argument doesn't exist, create a new Participation with this data.
     */
    create: XOR<ParticipationCreateInput, ParticipationUncheckedCreateInput>
    /**
     * In case the Participation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipationUpdateInput, ParticipationUncheckedUpdateInput>
  }

  /**
   * Participation delete
   */
  export type ParticipationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
    /**
     * Filter which Participation to delete.
     */
    where: ParticipationWhereUniqueInput
  }

  /**
   * Participation deleteMany
   */
  export type ParticipationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participations to delete
     */
    where?: ParticipationWhereInput
    /**
     * Limit how many Participations to delete.
     */
    limit?: number
  }

  /**
   * Participation without action
   */
  export type ParticipationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participation
     */
    select?: ParticipationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participation
     */
    omit?: ParticipationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StableScalarFieldEnum: {
    id: 'id',
    image: 'image',
    image_cover: 'image_cover',
    name: 'name',
    location: 'location',
    pilotes: 'pilotes',
    how_many_tournaments: 'how_many_tournaments',
    how_many_wins: 'how_many_wins',
    how_many_losses: 'how_many_losses',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StableScalarFieldEnum = (typeof StableScalarFieldEnum)[keyof typeof StableScalarFieldEnum]


  export const PiloteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stableId: 'stableId',
    age: 'age',
    gender: 'gender',
    best_chrono_time: 'best_chrono_time',
    pilote_number: 'pilote_number',
    points: 'points'
  };

  export type PiloteScalarFieldEnum = (typeof PiloteScalarFieldEnum)[keyof typeof PiloteScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    date: 'date',
    nb_tours: 'nb_tours'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ParticipationScalarFieldEnum: {
    id: 'id',
    piloteId: 'piloteId',
    courseId: 'courseId',
    chrono: 'chrono',
    position: 'position',
    points: 'points',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParticipationScalarFieldEnum = (typeof ParticipationScalarFieldEnum)[keyof typeof ParticipationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StableWhereInput = {
    AND?: StableWhereInput | StableWhereInput[]
    OR?: StableWhereInput[]
    NOT?: StableWhereInput | StableWhereInput[]
    id?: StringFilter<"Stable"> | string
    image?: StringNullableFilter<"Stable"> | string | null
    image_cover?: StringNullableFilter<"Stable"> | string | null
    name?: StringFilter<"Stable"> | string
    location?: StringFilter<"Stable"> | string
    pilotes?: IntFilter<"Stable"> | number
    how_many_tournaments?: IntFilter<"Stable"> | number
    how_many_wins?: IntFilter<"Stable"> | number
    how_many_losses?: IntFilter<"Stable"> | number
    createdAt?: DateTimeFilter<"Stable"> | Date | string
    updatedAt?: DateTimeFilter<"Stable"> | Date | string
    pilote?: PiloteListRelationFilter
  }

  export type StableOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    image_cover?: SortOrderInput | SortOrder
    name?: SortOrder
    location?: SortOrder
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pilote?: PiloteOrderByRelationAggregateInput
  }

  export type StableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StableWhereInput | StableWhereInput[]
    OR?: StableWhereInput[]
    NOT?: StableWhereInput | StableWhereInput[]
    image?: StringNullableFilter<"Stable"> | string | null
    image_cover?: StringNullableFilter<"Stable"> | string | null
    name?: StringFilter<"Stable"> | string
    location?: StringFilter<"Stable"> | string
    pilotes?: IntFilter<"Stable"> | number
    how_many_tournaments?: IntFilter<"Stable"> | number
    how_many_wins?: IntFilter<"Stable"> | number
    how_many_losses?: IntFilter<"Stable"> | number
    createdAt?: DateTimeFilter<"Stable"> | Date | string
    updatedAt?: DateTimeFilter<"Stable"> | Date | string
    pilote?: PiloteListRelationFilter
  }, "id">

  export type StableOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    image_cover?: SortOrderInput | SortOrder
    name?: SortOrder
    location?: SortOrder
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StableCountOrderByAggregateInput
    _avg?: StableAvgOrderByAggregateInput
    _max?: StableMaxOrderByAggregateInput
    _min?: StableMinOrderByAggregateInput
    _sum?: StableSumOrderByAggregateInput
  }

  export type StableScalarWhereWithAggregatesInput = {
    AND?: StableScalarWhereWithAggregatesInput | StableScalarWhereWithAggregatesInput[]
    OR?: StableScalarWhereWithAggregatesInput[]
    NOT?: StableScalarWhereWithAggregatesInput | StableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stable"> | string
    image?: StringNullableWithAggregatesFilter<"Stable"> | string | null
    image_cover?: StringNullableWithAggregatesFilter<"Stable"> | string | null
    name?: StringWithAggregatesFilter<"Stable"> | string
    location?: StringWithAggregatesFilter<"Stable"> | string
    pilotes?: IntWithAggregatesFilter<"Stable"> | number
    how_many_tournaments?: IntWithAggregatesFilter<"Stable"> | number
    how_many_wins?: IntWithAggregatesFilter<"Stable"> | number
    how_many_losses?: IntWithAggregatesFilter<"Stable"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Stable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Stable"> | Date | string
  }

  export type PiloteWhereInput = {
    AND?: PiloteWhereInput | PiloteWhereInput[]
    OR?: PiloteWhereInput[]
    NOT?: PiloteWhereInput | PiloteWhereInput[]
    id?: StringFilter<"Pilote"> | string
    name?: StringFilter<"Pilote"> | string
    stableId?: StringFilter<"Pilote"> | string
    age?: IntFilter<"Pilote"> | number
    gender?: StringFilter<"Pilote"> | string
    best_chrono_time?: IntFilter<"Pilote"> | number
    pilote_number?: IntFilter<"Pilote"> | number
    points?: IntFilter<"Pilote"> | number
    courses?: ParticipationListRelationFilter
    Stable?: XOR<StableScalarRelationFilter, StableWhereInput>
  }

  export type PiloteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stableId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
    courses?: ParticipationOrderByRelationAggregateInput
    Stable?: StableOrderByWithRelationInput
  }

  export type PiloteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PiloteWhereInput | PiloteWhereInput[]
    OR?: PiloteWhereInput[]
    NOT?: PiloteWhereInput | PiloteWhereInput[]
    name?: StringFilter<"Pilote"> | string
    stableId?: StringFilter<"Pilote"> | string
    age?: IntFilter<"Pilote"> | number
    gender?: StringFilter<"Pilote"> | string
    best_chrono_time?: IntFilter<"Pilote"> | number
    pilote_number?: IntFilter<"Pilote"> | number
    points?: IntFilter<"Pilote"> | number
    courses?: ParticipationListRelationFilter
    Stable?: XOR<StableScalarRelationFilter, StableWhereInput>
  }, "id">

  export type PiloteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stableId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
    _count?: PiloteCountOrderByAggregateInput
    _avg?: PiloteAvgOrderByAggregateInput
    _max?: PiloteMaxOrderByAggregateInput
    _min?: PiloteMinOrderByAggregateInput
    _sum?: PiloteSumOrderByAggregateInput
  }

  export type PiloteScalarWhereWithAggregatesInput = {
    AND?: PiloteScalarWhereWithAggregatesInput | PiloteScalarWhereWithAggregatesInput[]
    OR?: PiloteScalarWhereWithAggregatesInput[]
    NOT?: PiloteScalarWhereWithAggregatesInput | PiloteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pilote"> | string
    name?: StringWithAggregatesFilter<"Pilote"> | string
    stableId?: StringWithAggregatesFilter<"Pilote"> | string
    age?: IntWithAggregatesFilter<"Pilote"> | number
    gender?: StringWithAggregatesFilter<"Pilote"> | string
    best_chrono_time?: IntWithAggregatesFilter<"Pilote"> | number
    pilote_number?: IntWithAggregatesFilter<"Pilote"> | number
    points?: IntWithAggregatesFilter<"Pilote"> | number
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    image?: StringNullableFilter<"Course"> | string | null
    date?: DateTimeFilter<"Course"> | Date | string
    nb_tours?: IntFilter<"Course"> | number
    participants?: ParticipationListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    date?: SortOrder
    nb_tours?: SortOrder
    participants?: ParticipationOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    image?: StringNullableFilter<"Course"> | string | null
    date?: DateTimeFilter<"Course"> | Date | string
    nb_tours?: IntFilter<"Course"> | number
    participants?: ParticipationListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    date?: SortOrder
    nb_tours?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    image?: StringNullableWithAggregatesFilter<"Course"> | string | null
    date?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    nb_tours?: IntWithAggregatesFilter<"Course"> | number
  }

  export type ParticipationWhereInput = {
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    id?: StringFilter<"Participation"> | string
    piloteId?: StringFilter<"Participation"> | string
    courseId?: StringFilter<"Participation"> | string
    chrono?: IntNullableFilter<"Participation"> | number | null
    position?: IntNullableFilter<"Participation"> | number | null
    points?: IntFilter<"Participation"> | number
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    pilote?: XOR<PiloteScalarRelationFilter, PiloteWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type ParticipationOrderByWithRelationInput = {
    id?: SortOrder
    piloteId?: SortOrder
    courseId?: SortOrder
    chrono?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pilote?: PiloteOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type ParticipationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    piloteId_courseId?: ParticipationPiloteIdCourseIdCompoundUniqueInput
    AND?: ParticipationWhereInput | ParticipationWhereInput[]
    OR?: ParticipationWhereInput[]
    NOT?: ParticipationWhereInput | ParticipationWhereInput[]
    piloteId?: StringFilter<"Participation"> | string
    courseId?: StringFilter<"Participation"> | string
    chrono?: IntNullableFilter<"Participation"> | number | null
    position?: IntNullableFilter<"Participation"> | number | null
    points?: IntFilter<"Participation"> | number
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
    pilote?: XOR<PiloteScalarRelationFilter, PiloteWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "piloteId_courseId">

  export type ParticipationOrderByWithAggregationInput = {
    id?: SortOrder
    piloteId?: SortOrder
    courseId?: SortOrder
    chrono?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParticipationCountOrderByAggregateInput
    _avg?: ParticipationAvgOrderByAggregateInput
    _max?: ParticipationMaxOrderByAggregateInput
    _min?: ParticipationMinOrderByAggregateInput
    _sum?: ParticipationSumOrderByAggregateInput
  }

  export type ParticipationScalarWhereWithAggregatesInput = {
    AND?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    OR?: ParticipationScalarWhereWithAggregatesInput[]
    NOT?: ParticipationScalarWhereWithAggregatesInput | ParticipationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participation"> | string
    piloteId?: StringWithAggregatesFilter<"Participation"> | string
    courseId?: StringWithAggregatesFilter<"Participation"> | string
    chrono?: IntNullableWithAggregatesFilter<"Participation"> | number | null
    position?: IntNullableWithAggregatesFilter<"Participation"> | number | null
    points?: IntWithAggregatesFilter<"Participation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Participation"> | Date | string
  }

  export type StableCreateInput = {
    id?: string
    image?: string | null
    image_cover?: string | null
    name: string
    location: string
    pilotes?: number
    how_many_tournaments?: number
    how_many_wins?: number
    how_many_losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pilote?: PiloteCreateNestedManyWithoutStableInput
  }

  export type StableUncheckedCreateInput = {
    id?: string
    image?: string | null
    image_cover?: string | null
    name: string
    location: string
    pilotes?: number
    how_many_tournaments?: number
    how_many_wins?: number
    how_many_losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pilote?: PiloteUncheckedCreateNestedManyWithoutStableInput
  }

  export type StableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilote?: PiloteUpdateManyWithoutStableNestedInput
  }

  export type StableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilote?: PiloteUncheckedUpdateManyWithoutStableNestedInput
  }

  export type StableCreateManyInput = {
    id?: string
    image?: string | null
    image_cover?: string | null
    name: string
    location: string
    pilotes?: number
    how_many_tournaments?: number
    how_many_wins?: number
    how_many_losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PiloteCreateInput = {
    id?: string
    name: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
    courses?: ParticipationCreateNestedManyWithoutPiloteInput
    Stable: StableCreateNestedOneWithoutPiloteInput
  }

  export type PiloteUncheckedCreateInput = {
    id?: string
    name: string
    stableId: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
    courses?: ParticipationUncheckedCreateNestedManyWithoutPiloteInput
  }

  export type PiloteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    courses?: ParticipationUpdateManyWithoutPiloteNestedInput
    Stable?: StableUpdateOneRequiredWithoutPiloteNestedInput
  }

  export type PiloteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stableId?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    courses?: ParticipationUncheckedUpdateManyWithoutPiloteNestedInput
  }

  export type PiloteCreateManyInput = {
    id?: string
    name: string
    stableId: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
  }

  export type PiloteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type PiloteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stableId?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    image?: string | null
    date: Date | string
    nb_tours: number
    participants?: ParticipationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    image?: string | null
    date: Date | string
    nb_tours: number
    participants?: ParticipationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
    participants?: ParticipationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
    participants?: ParticipationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    image?: string | null
    date: Date | string
    nb_tours: number
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipationCreateInput = {
    id?: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pilote: PiloteCreateNestedOneWithoutCoursesInput
    course: CourseCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipationUncheckedCreateInput = {
    id?: string
    piloteId: string
    courseId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilote?: PiloteUpdateOneRequiredWithoutCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    piloteId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateManyInput = {
    id?: string
    piloteId: string
    courseId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    piloteId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PiloteListRelationFilter = {
    every?: PiloteWhereInput
    some?: PiloteWhereInput
    none?: PiloteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PiloteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StableCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    image_cover?: SortOrder
    name?: SortOrder
    location?: SortOrder
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StableAvgOrderByAggregateInput = {
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
  }

  export type StableMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    image_cover?: SortOrder
    name?: SortOrder
    location?: SortOrder
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StableMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    image_cover?: SortOrder
    name?: SortOrder
    location?: SortOrder
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StableSumOrderByAggregateInput = {
    pilotes?: SortOrder
    how_many_tournaments?: SortOrder
    how_many_wins?: SortOrder
    how_many_losses?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ParticipationListRelationFilter = {
    every?: ParticipationWhereInput
    some?: ParticipationWhereInput
    none?: ParticipationWhereInput
  }

  export type StableScalarRelationFilter = {
    is?: StableWhereInput
    isNot?: StableWhereInput
  }

  export type ParticipationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PiloteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stableId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
  }

  export type PiloteAvgOrderByAggregateInput = {
    age?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
  }

  export type PiloteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stableId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
  }

  export type PiloteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stableId?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
  }

  export type PiloteSumOrderByAggregateInput = {
    age?: SortOrder
    best_chrono_time?: SortOrder
    pilote_number?: SortOrder
    points?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    date?: SortOrder
    nb_tours?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    nb_tours?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    date?: SortOrder
    nb_tours?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    date?: SortOrder
    nb_tours?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    nb_tours?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PiloteScalarRelationFilter = {
    is?: PiloteWhereInput
    isNot?: PiloteWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type ParticipationPiloteIdCourseIdCompoundUniqueInput = {
    piloteId: string
    courseId: string
  }

  export type ParticipationCountOrderByAggregateInput = {
    id?: SortOrder
    piloteId?: SortOrder
    courseId?: SortOrder
    chrono?: SortOrder
    position?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipationAvgOrderByAggregateInput = {
    chrono?: SortOrder
    position?: SortOrder
    points?: SortOrder
  }

  export type ParticipationMaxOrderByAggregateInput = {
    id?: SortOrder
    piloteId?: SortOrder
    courseId?: SortOrder
    chrono?: SortOrder
    position?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipationMinOrderByAggregateInput = {
    id?: SortOrder
    piloteId?: SortOrder
    courseId?: SortOrder
    chrono?: SortOrder
    position?: SortOrder
    points?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParticipationSumOrderByAggregateInput = {
    chrono?: SortOrder
    position?: SortOrder
    points?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PiloteCreateNestedManyWithoutStableInput = {
    create?: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput> | PiloteCreateWithoutStableInput[] | PiloteUncheckedCreateWithoutStableInput[]
    connectOrCreate?: PiloteCreateOrConnectWithoutStableInput | PiloteCreateOrConnectWithoutStableInput[]
    createMany?: PiloteCreateManyStableInputEnvelope
    connect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
  }

  export type PiloteUncheckedCreateNestedManyWithoutStableInput = {
    create?: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput> | PiloteCreateWithoutStableInput[] | PiloteUncheckedCreateWithoutStableInput[]
    connectOrCreate?: PiloteCreateOrConnectWithoutStableInput | PiloteCreateOrConnectWithoutStableInput[]
    createMany?: PiloteCreateManyStableInputEnvelope
    connect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PiloteUpdateManyWithoutStableNestedInput = {
    create?: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput> | PiloteCreateWithoutStableInput[] | PiloteUncheckedCreateWithoutStableInput[]
    connectOrCreate?: PiloteCreateOrConnectWithoutStableInput | PiloteCreateOrConnectWithoutStableInput[]
    upsert?: PiloteUpsertWithWhereUniqueWithoutStableInput | PiloteUpsertWithWhereUniqueWithoutStableInput[]
    createMany?: PiloteCreateManyStableInputEnvelope
    set?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    disconnect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    delete?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    connect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    update?: PiloteUpdateWithWhereUniqueWithoutStableInput | PiloteUpdateWithWhereUniqueWithoutStableInput[]
    updateMany?: PiloteUpdateManyWithWhereWithoutStableInput | PiloteUpdateManyWithWhereWithoutStableInput[]
    deleteMany?: PiloteScalarWhereInput | PiloteScalarWhereInput[]
  }

  export type PiloteUncheckedUpdateManyWithoutStableNestedInput = {
    create?: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput> | PiloteCreateWithoutStableInput[] | PiloteUncheckedCreateWithoutStableInput[]
    connectOrCreate?: PiloteCreateOrConnectWithoutStableInput | PiloteCreateOrConnectWithoutStableInput[]
    upsert?: PiloteUpsertWithWhereUniqueWithoutStableInput | PiloteUpsertWithWhereUniqueWithoutStableInput[]
    createMany?: PiloteCreateManyStableInputEnvelope
    set?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    disconnect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    delete?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    connect?: PiloteWhereUniqueInput | PiloteWhereUniqueInput[]
    update?: PiloteUpdateWithWhereUniqueWithoutStableInput | PiloteUpdateWithWhereUniqueWithoutStableInput[]
    updateMany?: PiloteUpdateManyWithWhereWithoutStableInput | PiloteUpdateManyWithWhereWithoutStableInput[]
    deleteMany?: PiloteScalarWhereInput | PiloteScalarWhereInput[]
  }

  export type ParticipationCreateNestedManyWithoutPiloteInput = {
    create?: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput> | ParticipationCreateWithoutPiloteInput[] | ParticipationUncheckedCreateWithoutPiloteInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutPiloteInput | ParticipationCreateOrConnectWithoutPiloteInput[]
    createMany?: ParticipationCreateManyPiloteInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type StableCreateNestedOneWithoutPiloteInput = {
    create?: XOR<StableCreateWithoutPiloteInput, StableUncheckedCreateWithoutPiloteInput>
    connectOrCreate?: StableCreateOrConnectWithoutPiloteInput
    connect?: StableWhereUniqueInput
  }

  export type ParticipationUncheckedCreateNestedManyWithoutPiloteInput = {
    create?: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput> | ParticipationCreateWithoutPiloteInput[] | ParticipationUncheckedCreateWithoutPiloteInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutPiloteInput | ParticipationCreateOrConnectWithoutPiloteInput[]
    createMany?: ParticipationCreateManyPiloteInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type ParticipationUpdateManyWithoutPiloteNestedInput = {
    create?: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput> | ParticipationCreateWithoutPiloteInput[] | ParticipationUncheckedCreateWithoutPiloteInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutPiloteInput | ParticipationCreateOrConnectWithoutPiloteInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutPiloteInput | ParticipationUpsertWithWhereUniqueWithoutPiloteInput[]
    createMany?: ParticipationCreateManyPiloteInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutPiloteInput | ParticipationUpdateWithWhereUniqueWithoutPiloteInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutPiloteInput | ParticipationUpdateManyWithWhereWithoutPiloteInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type StableUpdateOneRequiredWithoutPiloteNestedInput = {
    create?: XOR<StableCreateWithoutPiloteInput, StableUncheckedCreateWithoutPiloteInput>
    connectOrCreate?: StableCreateOrConnectWithoutPiloteInput
    upsert?: StableUpsertWithoutPiloteInput
    connect?: StableWhereUniqueInput
    update?: XOR<XOR<StableUpdateToOneWithWhereWithoutPiloteInput, StableUpdateWithoutPiloteInput>, StableUncheckedUpdateWithoutPiloteInput>
  }

  export type ParticipationUncheckedUpdateManyWithoutPiloteNestedInput = {
    create?: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput> | ParticipationCreateWithoutPiloteInput[] | ParticipationUncheckedCreateWithoutPiloteInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutPiloteInput | ParticipationCreateOrConnectWithoutPiloteInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutPiloteInput | ParticipationUpsertWithWhereUniqueWithoutPiloteInput[]
    createMany?: ParticipationCreateManyPiloteInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutPiloteInput | ParticipationUpdateWithWhereUniqueWithoutPiloteInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutPiloteInput | ParticipationUpdateManyWithWhereWithoutPiloteInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type ParticipationCreateNestedManyWithoutCourseInput = {
    create?: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput> | ParticipationCreateWithoutCourseInput[] | ParticipationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCourseInput | ParticipationCreateOrConnectWithoutCourseInput[]
    createMany?: ParticipationCreateManyCourseInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type ParticipationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput> | ParticipationCreateWithoutCourseInput[] | ParticipationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCourseInput | ParticipationCreateOrConnectWithoutCourseInput[]
    createMany?: ParticipationCreateManyCourseInputEnvelope
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
  }

  export type ParticipationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput> | ParticipationCreateWithoutCourseInput[] | ParticipationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCourseInput | ParticipationCreateOrConnectWithoutCourseInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutCourseInput | ParticipationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ParticipationCreateManyCourseInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutCourseInput | ParticipationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutCourseInput | ParticipationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type ParticipationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput> | ParticipationCreateWithoutCourseInput[] | ParticipationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ParticipationCreateOrConnectWithoutCourseInput | ParticipationCreateOrConnectWithoutCourseInput[]
    upsert?: ParticipationUpsertWithWhereUniqueWithoutCourseInput | ParticipationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ParticipationCreateManyCourseInputEnvelope
    set?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    disconnect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    delete?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    connect?: ParticipationWhereUniqueInput | ParticipationWhereUniqueInput[]
    update?: ParticipationUpdateWithWhereUniqueWithoutCourseInput | ParticipationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ParticipationUpdateManyWithWhereWithoutCourseInput | ParticipationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
  }

  export type PiloteCreateNestedOneWithoutCoursesInput = {
    create?: XOR<PiloteCreateWithoutCoursesInput, PiloteUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: PiloteCreateOrConnectWithoutCoursesInput
    connect?: PiloteWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CourseCreateWithoutParticipantsInput, CourseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutParticipantsInput
    connect?: CourseWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PiloteUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<PiloteCreateWithoutCoursesInput, PiloteUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: PiloteCreateOrConnectWithoutCoursesInput
    upsert?: PiloteUpsertWithoutCoursesInput
    connect?: PiloteWhereUniqueInput
    update?: XOR<XOR<PiloteUpdateToOneWithWhereWithoutCoursesInput, PiloteUpdateWithoutCoursesInput>, PiloteUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CourseCreateWithoutParticipantsInput, CourseUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutParticipantsInput
    upsert?: CourseUpsertWithoutParticipantsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutParticipantsInput, CourseUpdateWithoutParticipantsInput>, CourseUncheckedUpdateWithoutParticipantsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PiloteCreateWithoutStableInput = {
    id?: string
    name: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
    courses?: ParticipationCreateNestedManyWithoutPiloteInput
  }

  export type PiloteUncheckedCreateWithoutStableInput = {
    id?: string
    name: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
    courses?: ParticipationUncheckedCreateNestedManyWithoutPiloteInput
  }

  export type PiloteCreateOrConnectWithoutStableInput = {
    where: PiloteWhereUniqueInput
    create: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput>
  }

  export type PiloteCreateManyStableInputEnvelope = {
    data: PiloteCreateManyStableInput | PiloteCreateManyStableInput[]
    skipDuplicates?: boolean
  }

  export type PiloteUpsertWithWhereUniqueWithoutStableInput = {
    where: PiloteWhereUniqueInput
    update: XOR<PiloteUpdateWithoutStableInput, PiloteUncheckedUpdateWithoutStableInput>
    create: XOR<PiloteCreateWithoutStableInput, PiloteUncheckedCreateWithoutStableInput>
  }

  export type PiloteUpdateWithWhereUniqueWithoutStableInput = {
    where: PiloteWhereUniqueInput
    data: XOR<PiloteUpdateWithoutStableInput, PiloteUncheckedUpdateWithoutStableInput>
  }

  export type PiloteUpdateManyWithWhereWithoutStableInput = {
    where: PiloteScalarWhereInput
    data: XOR<PiloteUpdateManyMutationInput, PiloteUncheckedUpdateManyWithoutStableInput>
  }

  export type PiloteScalarWhereInput = {
    AND?: PiloteScalarWhereInput | PiloteScalarWhereInput[]
    OR?: PiloteScalarWhereInput[]
    NOT?: PiloteScalarWhereInput | PiloteScalarWhereInput[]
    id?: StringFilter<"Pilote"> | string
    name?: StringFilter<"Pilote"> | string
    stableId?: StringFilter<"Pilote"> | string
    age?: IntFilter<"Pilote"> | number
    gender?: StringFilter<"Pilote"> | string
    best_chrono_time?: IntFilter<"Pilote"> | number
    pilote_number?: IntFilter<"Pilote"> | number
    points?: IntFilter<"Pilote"> | number
  }

  export type ParticipationCreateWithoutPiloteInput = {
    id?: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutParticipantsInput
  }

  export type ParticipationUncheckedCreateWithoutPiloteInput = {
    id?: string
    courseId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationCreateOrConnectWithoutPiloteInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput>
  }

  export type ParticipationCreateManyPiloteInputEnvelope = {
    data: ParticipationCreateManyPiloteInput | ParticipationCreateManyPiloteInput[]
    skipDuplicates?: boolean
  }

  export type StableCreateWithoutPiloteInput = {
    id?: string
    image?: string | null
    image_cover?: string | null
    name: string
    location: string
    pilotes?: number
    how_many_tournaments?: number
    how_many_wins?: number
    how_many_losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableUncheckedCreateWithoutPiloteInput = {
    id?: string
    image?: string | null
    image_cover?: string | null
    name: string
    location: string
    pilotes?: number
    how_many_tournaments?: number
    how_many_wins?: number
    how_many_losses?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StableCreateOrConnectWithoutPiloteInput = {
    where: StableWhereUniqueInput
    create: XOR<StableCreateWithoutPiloteInput, StableUncheckedCreateWithoutPiloteInput>
  }

  export type ParticipationUpsertWithWhereUniqueWithoutPiloteInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutPiloteInput, ParticipationUncheckedUpdateWithoutPiloteInput>
    create: XOR<ParticipationCreateWithoutPiloteInput, ParticipationUncheckedCreateWithoutPiloteInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutPiloteInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutPiloteInput, ParticipationUncheckedUpdateWithoutPiloteInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutPiloteInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutPiloteInput>
  }

  export type ParticipationScalarWhereInput = {
    AND?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    OR?: ParticipationScalarWhereInput[]
    NOT?: ParticipationScalarWhereInput | ParticipationScalarWhereInput[]
    id?: StringFilter<"Participation"> | string
    piloteId?: StringFilter<"Participation"> | string
    courseId?: StringFilter<"Participation"> | string
    chrono?: IntNullableFilter<"Participation"> | number | null
    position?: IntNullableFilter<"Participation"> | number | null
    points?: IntFilter<"Participation"> | number
    createdAt?: DateTimeFilter<"Participation"> | Date | string
    updatedAt?: DateTimeFilter<"Participation"> | Date | string
  }

  export type StableUpsertWithoutPiloteInput = {
    update: XOR<StableUpdateWithoutPiloteInput, StableUncheckedUpdateWithoutPiloteInput>
    create: XOR<StableCreateWithoutPiloteInput, StableUncheckedCreateWithoutPiloteInput>
    where?: StableWhereInput
  }

  export type StableUpdateToOneWithWhereWithoutPiloteInput = {
    where?: StableWhereInput
    data: XOR<StableUpdateWithoutPiloteInput, StableUncheckedUpdateWithoutPiloteInput>
  }

  export type StableUpdateWithoutPiloteInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StableUncheckedUpdateWithoutPiloteInput = {
    id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    image_cover?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    pilotes?: IntFieldUpdateOperationsInput | number
    how_many_tournaments?: IntFieldUpdateOperationsInput | number
    how_many_wins?: IntFieldUpdateOperationsInput | number
    how_many_losses?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateWithoutCourseInput = {
    id?: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    pilote: PiloteCreateNestedOneWithoutCoursesInput
  }

  export type ParticipationUncheckedCreateWithoutCourseInput = {
    id?: string
    piloteId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationCreateOrConnectWithoutCourseInput = {
    where: ParticipationWhereUniqueInput
    create: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput>
  }

  export type ParticipationCreateManyCourseInputEnvelope = {
    data: ParticipationCreateManyCourseInput | ParticipationCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type ParticipationUpsertWithWhereUniqueWithoutCourseInput = {
    where: ParticipationWhereUniqueInput
    update: XOR<ParticipationUpdateWithoutCourseInput, ParticipationUncheckedUpdateWithoutCourseInput>
    create: XOR<ParticipationCreateWithoutCourseInput, ParticipationUncheckedCreateWithoutCourseInput>
  }

  export type ParticipationUpdateWithWhereUniqueWithoutCourseInput = {
    where: ParticipationWhereUniqueInput
    data: XOR<ParticipationUpdateWithoutCourseInput, ParticipationUncheckedUpdateWithoutCourseInput>
  }

  export type ParticipationUpdateManyWithWhereWithoutCourseInput = {
    where: ParticipationScalarWhereInput
    data: XOR<ParticipationUpdateManyMutationInput, ParticipationUncheckedUpdateManyWithoutCourseInput>
  }

  export type PiloteCreateWithoutCoursesInput = {
    id?: string
    name: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
    Stable: StableCreateNestedOneWithoutPiloteInput
  }

  export type PiloteUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    stableId: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
  }

  export type PiloteCreateOrConnectWithoutCoursesInput = {
    where: PiloteWhereUniqueInput
    create: XOR<PiloteCreateWithoutCoursesInput, PiloteUncheckedCreateWithoutCoursesInput>
  }

  export type CourseCreateWithoutParticipantsInput = {
    id?: string
    name: string
    image?: string | null
    date: Date | string
    nb_tours: number
  }

  export type CourseUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    image?: string | null
    date: Date | string
    nb_tours: number
  }

  export type CourseCreateOrConnectWithoutParticipantsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutParticipantsInput, CourseUncheckedCreateWithoutParticipantsInput>
  }

  export type PiloteUpsertWithoutCoursesInput = {
    update: XOR<PiloteUpdateWithoutCoursesInput, PiloteUncheckedUpdateWithoutCoursesInput>
    create: XOR<PiloteCreateWithoutCoursesInput, PiloteUncheckedCreateWithoutCoursesInput>
    where?: PiloteWhereInput
  }

  export type PiloteUpdateToOneWithWhereWithoutCoursesInput = {
    where?: PiloteWhereInput
    data: XOR<PiloteUpdateWithoutCoursesInput, PiloteUncheckedUpdateWithoutCoursesInput>
  }

  export type PiloteUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    Stable?: StableUpdateOneRequiredWithoutPiloteNestedInput
  }

  export type PiloteUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stableId?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUpsertWithoutParticipantsInput = {
    update: XOR<CourseUpdateWithoutParticipantsInput, CourseUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CourseCreateWithoutParticipantsInput, CourseUncheckedCreateWithoutParticipantsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutParticipantsInput, CourseUncheckedUpdateWithoutParticipantsInput>
  }

  export type CourseUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_tours?: IntFieldUpdateOperationsInput | number
  }

  export type PiloteCreateManyStableInput = {
    id?: string
    name: string
    age: number
    gender: string
    best_chrono_time: number
    pilote_number: number
    points?: number
  }

  export type PiloteUpdateWithoutStableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    courses?: ParticipationUpdateManyWithoutPiloteNestedInput
  }

  export type PiloteUncheckedUpdateWithoutStableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    courses?: ParticipationUncheckedUpdateManyWithoutPiloteNestedInput
  }

  export type PiloteUncheckedUpdateManyWithoutStableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    best_chrono_time?: IntFieldUpdateOperationsInput | number
    pilote_number?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipationCreateManyPiloteInput = {
    id?: string
    courseId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationUpdateWithoutPiloteInput = {
    id?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutPiloteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyWithoutPiloteInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationCreateManyCourseInput = {
    id?: string
    piloteId: string
    chrono?: number | null
    position?: number | null
    points?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParticipationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pilote?: PiloteUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type ParticipationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    piloteId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    piloteId?: StringFieldUpdateOperationsInput | string
    chrono?: NullableIntFieldUpdateOperationsInput | number | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}