import { CollectionDetailsItem } from './CollectionDetails/CollectionDetailsItem';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Box, Flex, Icon, Paragraph, Stack, Text } from '@zoralabs/zord';
import { formatCryptoVal } from 'utils/numbers';
import { useAccount } from 'wagmi';

interface MintDetailsProps {
  collection: ERC721DropProviderState;
  hideToggle?: boolean;
  initialOpen?: boolean;
}

export function MintDetails({
  collection,
  hideToggle,
  initialOpen = false,
}: MintDetailsProps) {
  const { address } = useAccount();

  const formattedMintedCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(collection.totalMinted);

  const formattedTotalSupplyCount = Intl.NumberFormat('en', {
    notation: 'standard',
  }).format(collection.maxSupply);

  return (
    <Stack gap="x4">
      <Collapsible.Root defaultOpen={hideToggle} onOpenChange={(value) => setOpened(value)}>
        <div className="zord-mint-details">
          <CollectionDetailsItem className="zord-mint-details__item" name="Number minted">
            <Paragraph size="sm">
              {formattedMintedCount}
              {collection.maxSupply > OPEN_EDITION_SIZE ? (
                ' NFTs'
              ) : (
                <Paragraph as="span" size="sm" color="tertiary">
                  <span> / {formattedTotalSupplyCount}</span>
                </Paragraph>
              )}
            </Paragraph>
          </CollectionDetailsItem>

          {maxPerWallet < OPEN_EDITION_SIZE && (
            <CollectionDetailsItem
              className="zord-mint-details__item"
              name="Max per address"
            >
              <Text variant="paragraph-sm">
                {allowlistEntry &&
                  `Presale: ${allowlistEntry.maxCanMint} / Public sale: `}
                {maxPerWallet}
              </Text>
            </CollectionDetailsItem>
          )}

          <Box>
            <Collapsible.Content>
              {/* Content of the collapsible section */}
              <Stack gap="x3">
                {!!(saleIsFinished || isSoldOut) && (
                  <CollectionDetailsItem
                    className="zord-mint-details__item"
                    name="Mint price"
                    value={
                      collection.salesConfig.publicSalePrice === '0'
                        ? 'Free'
                        : `${formatCryptoVal(collection.salesConfig.publicSalePrice)} ETH`
                    }
                  />
                )}

                {presaleExists && merkleRootExists && (
                  <>
                    <CollectionDetailsItem
                      className="zord-mint-details__item"
                      name="Presale start"
                      value={presaleStartDate.toLocaleString(...dateOptions)}
                    />

                    {!isNaN(presaleEndDate.getTime()) && (
                      <CollectionDetailsItem
                        className="zord-mint-details__item"
                        name="Presale end"
                        value={presaleEndDate.toLocaleString(...dateOptions)}
                      />
                    )}
                  </>
                )}

                <CollectionDetailsItem
                  className="zord-mint-details__item"
                  name="Public sale start"
                  value={startDate.toLocaleString(
                    ...(dateOptions as [string, Intl.DateTimeFormatOptions])
                  )}
                />

                {!isNaN(endDate.getTime()) && (
                  <CollectionDetailsItem
                    className="zord-mint-details__item"
                    name="Public sale end"
                    value={endDate.toLocaleString(...dateOptions)}
                  />
                )}
              </Stack>
            </Collapsible.Content>

            {!hideToggle && (
              <Collapsible.Trigger asChild={true}>
                <Flex
                  className="zord-mint-details__trigger"
                  cursor="pointer"
                  mt="x2"
                  gap="x2"
                  mx="auto"
                  align="center"
                  justify="center"
                >
                  <Text variant="label-sm">Details</Text>
                  <Icon id="ChevronDown" color="tertiary" flip={opened} />
                </Flex>
              </Collapsible.Trigger>
            )}
          </Box>
        </div>
      </Collapsible.Root>
    </Stack>
  );
}
